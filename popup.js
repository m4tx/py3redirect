(function () {
    let toggleRedirectBtn = document.getElementById("toggleRedirect");
    let versionSelector = document.getElementById("versionSelect");

    function updateToggleRedirectBtn(isEnabled) {
        toggleRedirectBtn.classList.remove("warning", "success");
        if (isEnabled) {
            toggleRedirectBtn.classList.add("warning");
            toggleRedirectBtn.textContent = "Disable redirecting temporarily";
        } else {
            toggleRedirectBtn.classList.add("success");
            toggleRedirectBtn.textContent = "Re-enable redirecting";
        }
    }

    browserAPI.api.storage.local.get({isEnabled: true}, data => {
        updateToggleRedirectBtn(data.isEnabled);
    });

    browserAPI.api.storage.local.get({pyVersion: "3"}, data => {
        versionSelector.value = data.pyVersion;
    });

    toggleRedirectBtn.addEventListener("click", () => {
        browserAPI.sendMessage({action: "toggleEnabled"}, updateToggleRedirectBtn);
    });
    versionSelector.addEventListener("change", (e) => {
        browserAPI.sendMessage({action: "setPyVersion", pyVersion: e.target.value});
    });
})();
