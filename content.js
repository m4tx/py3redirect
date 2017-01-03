browserAPI.sendMessage({action: "redirect"}, newUrl => {
    if (newUrl) {
        window.location.replace(newUrl);
    }
});
