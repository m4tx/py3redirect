(function () {
    const URL_REGEX = /^https?:\/\/docs\.python\.org\/([23][^\/]*?)\/(.*)/;

    const SPECIAL_CASES = {
        'library/sets.html' : 'library/stdtypes.html#set',
        'library/stringio.html': 'library/io.html#io.StringIO'
    };

    let isEnabled = true;
    updateIsEnabled();
    let pyVersion = 3;
    browserAPI.api.storage.local.get({pyVersion: 3,}, data => {
        pyVersion = data.pyVersion;
    });

    function setPyVersion(version) {
        pyVersion = version;
    }

    function getReplacementURL() {
        return "https://docs.python.org/" + pyVersion + "/$2";
    }

    /**
     * Check whether given URL returns 200 HTTP status code and redirects
     * to it if so.
     *
     * Also, save the original URL in the localStorage so the onBeforeRequest
     * listener can redirect immediately next time visiting the same page.
     *
     * @param {string} oldUrl the original Python 2 docs URL that should be
     *  cached in localStorage
     * @param {string} url Python 3 docs URL
     * @param tabId current tab ID
     * @param {function} sendResponse callback function to call with the new
     *  URL (or null if an error occurred)
     */
    function checkDocsExist(oldUrl, url, tabId, sendResponse) {
        let request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState === 4) { // DONE
                if (request.status === 200) {
                    localStorage.setItem(oldUrl, true);
                    browserAPI.api.pageAction.show(tabId);
                    sendResponse(url);
                } else {
                    browserAPI.api.pageAction.setTitle({
                        tabId: tabId,
                        title: 'Could not redirect (HTTP status code: ' +
                        request.status + ')'
                    });
                    sendResponse(null);
                }
            }
        };
        request.open("HEAD", url, true);
        request.send();
    }

    /*
     * onBeforeRequest listener that redirects to py3 docs immediately if the
     * requested page was visited before (using localStorage cache)
     */
    browserAPI.api.webRequest.onBeforeRequest.addListener(
        function (details) {
            let url = details.url;
            if (isEnabled && localStorage.getItem(url)) {
                let newUrl = url.replace(URL_REGEX, getReplacementURL());
                let matches = URL_REGEX.exec(details.url);
                if (matches[1] === pyVersion){
                    return {};
                }

                if (matches[2] in SPECIAL_CASES) {
                    newUrl = getReplacementURL().replace('$2', '') + SPECIAL_CASES[matches[2]];
                }
                return {redirectUrl: newUrl};
            }
        },
        {
            urls: ['*://docs.python.org/[23]*'],
            types: ['main_frame']
        },
        ["blocking"]
    );

    /**
     * Update isUpdate variable value from storage.local.
     */
    function updateIsEnabled() {
        browserAPI.api.storage.local.get({isEnabled: true}, data => {
            isEnabled = data.isEnabled;
        });
    }

    /**
     * Set new isUpdate variable value and store it in storage.local.
     * @param {boolean} enabled whether or not redirecting is currently enabled
     */
    function setEnabled(enabled) {
        isEnabled = enabled;
        browserAPI.api.storage.local.set({isEnabled: enabled});
    }

    browserAPI.api.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.action === "redirect") {
            let tabId = sender.tab.id;
            browserAPI.api.pageAction.show(tabId);
            if (!isEnabled) {
                return;
            }

            let matches = URL_REGEX.exec(sender.url);
            if (matches && matches[1] !== pyVersion) {
                let newUrl = sender.url.replace(URL_REGEX, getReplacementURL());
                if (matches[2] in SPECIAL_CASES) {
                    newUrl = getReplacementURL().replace('$2', '') + SPECIAL_CASES[matches[2]];
                }

                browserAPI.api.pageAction.setTitle({
                    tabId: tabId,
                    title: 'Redirecting...'
                });
                checkDocsExist(
                    sender.url,
                    newUrl,
                    tabId,
                    sendResponse
                );

                return true;
            }
        } else if (request.action === "isEnabled") {
            sendResponse(isEnabled);
        } else if (request.action === "setEnabled") {
            setEnabled(request.enabled);
        } else if (request.action === "setPyVersion") {
            setPyVersion(request.pyVersion);
        }
    });
})();
