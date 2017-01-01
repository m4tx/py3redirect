chrome.runtime.sendMessage({action: "redirect"}, newUrl => {
    if (newUrl) {
        window.location.replace(newUrl);
    }
});
