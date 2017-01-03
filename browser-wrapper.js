/*
 * Lightweight WebExtension "browser" wrapper
 */

let browserAPI = (function () {
    let useBrowser = false;
    let api = chrome;
    if (typeof browser !== 'undefined') {
        useBrowser = true;
        api = browser;
    }

    let sendMessage = function (message, responseCallback) {
        if (useBrowser) {
            browser.runtime.sendMessage(message).then(responseCallback);
        } else {
            chrome.runtime.sendMessage(message, responseCallback);
        }
    };

    return {api, sendMessage};
})();
