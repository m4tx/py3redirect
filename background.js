(function() {
    const URL_REGEX = /https:\/\/docs\.python\.org\/2.*?\/(.*)/;
    const URL_REPLACEMENT = "https://docs.python.org/3/$1";

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
     */
    function checkDocsExist(oldUrl, url, tabId) {
        let request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState === 4) { // DONE
                if (request.status === 200) {
                    localStorage.setItem(oldUrl, true);
                    chrome.tabs.update(tabId, {url: url});
                    chrome.pageAction.show(tabId);
                } else {
                    chrome.pageAction.setTitle({
                        tabId: tabId,
                        title: 'Could not redirect (HTTP status code: ' +
                        request.status + ')'
                    });
                }
            }
        };
        request.open("HEAD", url, true);
        request.send();
    }

    chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
            let url = details.url;
            if (localStorage.getItem(url)) {
                return {redirectUrl: url.replace(URL_REGEX, URL_REPLACEMENT)};
            }
        },
        {urls: ['*://docs.python.org/2*']},
        ["blocking"]
    );

    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        if (request.action == "redirect") {
            let tabId = sender.tab.id;
            if (URL_REGEX.test(sender.tab.url)) {
                chrome.pageAction.setTitle({tabId: tabId, title: 'Redirecting...'});
                checkDocsExist(sender.tab.url, sender.tab.url.replace(URL_REGEX, URL_REPLACEMENT), tabId);
            }
            chrome.pageAction.show(tabId);
        }
    });
})();
