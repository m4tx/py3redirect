(function () {
    let pyVersion, isEnabled;

    browserAPI.getStorageData(
        {pyVersion: "3", isEnabled: true},
        data => {
            pyVersion = data.pyVersion;
            isEnabled = data.isEnabled;
        }
    );

    function getNewLink(path, fragment) { // fragment might be the empty string
        if ((path + fragment) in SPECIAL_CASES) {
            return SPECIAL_CASES[path + fragment];
        }
        // If link is not a special case, but is in a file that is special-cased...
        if (path in SPECIAL_CASES) {
            // don't redirect if the file is special-cased as deleted (null)
            if (SPECIAL_CASES[path] === null) {
                return null;
            }
            // change just the file name and redirect to it, unless the special case
            // already has a fragment.
            if (!SPECIAL_CASES[path].includes("#")) {
                return SPECIAL_CASES[path] + fragment;
            }
        }
        // There's no relevant special case, return the orginial link
        return path + fragment;
    }

    function getRedirectURL(oldUrl) {
        const parsedUrl = new URL(oldUrl);
        // Remove leading "/". If there's no path, pathComponents with be ['']
        const pathComponents = parsedUrl.pathname.substr(1).split("/");
        const [version, ...pathComponentsWithoutVersion] = pathComponents;
        const path = pathComponentsWithoutVersion.join("/");

        if (!(version.startsWith("2") || version.startsWith("3"))
            || version === pyVersion) {
            return oldUrl;
        }

        // Don't perform any special case substitutions when redirecting from Python 3
        const newLink = version.startsWith("2") ? getNewLink(path, parsedUrl.hash) : path + parsedUrl.hash;
        // Special-cased as null, ie. "don't redirect"
        if (newLink === null) {
            return oldUrl;
        }
        const newUrl = new URL("https://docs.python.org/"+ pyVersion + "/" + newLink);
        // Preserve things like ?highlight=a%20search%20term
        newUrl.search = parsedUrl.search;
        return newUrl.toString();
    }

    /**
     * Check whether given URL returns 200 HTTP status code and redirects
     * to it if so.
     *
     * Also, save the new URL in the localStorage so the onBeforeRequest
     * listener can redirect immediately next time visiting the same page.
     *
     * @param {string} url New URL
     * @param {number} tabId current tab ID
     * @param {function} redirectFunc function that will redirect
     */
    function redirectIfExists(url, tabId, redirectFunc) {
        browserAPI.api.pageAction.setTitle({
            tabId: tabId,
            title: "Redirecting..."
        });

        let request = new XMLHttpRequest();

        request.onreadystatechange = function () {
            if (request.readyState === 4) { // DONE
                if (request.status === 200) {
                    localStorage.setItem(url, true);
                    browserAPI.api.pageAction.show(tabId);
                    redirectFunc(url);
                } else {
                    browserAPI.api.pageAction.setTitle({
                        tabId: tabId,
                        title: "Could not redirect (HTTP status code: " +
                        request.status + ")"
                    });
                }
            }
        };
        request.open("HEAD", url, true);
        request.send();
    }

    /**
     * Redirect to the right docs immediately if the page to redirect to has been
     * visited before (using localStorage cache)
     */
    browserAPI.api.webRequest.onBeforeRequest.addListener(
        function (details) {
            let newUrl = getRedirectURL(details.url);

            return isEnabled && (details.url != newUrl) && localStorage.getItem(newUrl)
                ? {redirectUrl: newUrl}
                : {};
        },
        {
            urls: ["*://docs.python.org/*"],
            types: ["main_frame"]
        },
        ["blocking"]
    );

    browserAPI.api.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.action === "checkForRedirect") {
            browserAPI.api.pageAction.show(sender.tab.id);

            if (isEnabled) {
                let newUrl = getRedirectURL(sender.url);

                if (sender.url !== newUrl) {
                    redirectIfExists(newUrl, sender.tab.id, sendResponse);
                    return true;
                }
            }
        } else if (request.action === "toggleEnabled") {
            isEnabled = !isEnabled;
            browserAPI.api.storage.local.set({isEnabled: isEnabled});
            sendResponse(isEnabled);
        } else if (request.action === "setPyVersion") {
            pyVersion = request.pyVersion;
            browserAPI.api.storage.local.set({pyVersion: pyVersion});
        }
    });
})();
