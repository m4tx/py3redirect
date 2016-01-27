(function() {
    var urlRegex = /https:\/\/docs\.python\.org\/2.*?\/(.+)/;
    var replacement = "https://docs.python.org/3/$1";

    /**
     * Check whether given URL returns 200 HTTP status code and redirects
     * to it if so
     *
     * @param url Python 3 docs URL
     * @param tabId current tab ID
     */
    var checkDocsExist = function (url, tabId) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState == 4) {
                if (request.status == 200) {
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
    };

    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        if (request.action == "redirect") {
            var tabId = sender.tab.id;
            if (urlRegex.test(sender.tab.url)) {
                chrome.pageAction.setTitle({tabId: tabId, title: 'Redirecting...'});
                checkDocsExist(sender.tab.url.replace(urlRegex, replacement), tabId);
            }
            chrome.pageAction.show(tabId);
        }
    });
})();
