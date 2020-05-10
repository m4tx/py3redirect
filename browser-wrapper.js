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

    let getStorageData = function (keys, responseCallback) {
        if (useBrowser) {
            browser.storage.local.get(keys).then(responseCallback);
        } else {
            chrome.storage.local.get(keys, responseCallback);
        }
    }

    return {api, sendMessage, getStorageData};
})();
