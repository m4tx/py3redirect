browserAPI.sendMessage({action: "checkForRedirect"}, newUrl => {
    if (newUrl) {
        window.location.replace(newUrl);
    }
});
