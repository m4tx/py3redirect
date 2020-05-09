(function () {
    let toggleRedirectBtn = document.getElementById("toggleRedirect");
    let versionSelector = document.getElementById("version-select");

    let isEnabled = true;

    browserAPI.api.storage.local.get({pyVersion: "3"}, data => {
        versionSelector.value = data.pyVersion;
    });

    function updateToggleRedirectBtn() {
        toggleRedirectBtn.classList.remove("warning", "success");
        if (isEnabled) {
            toggleRedirectBtn.classList.add("warning");
            toggleRedirectBtn.textContent = "Disable redirecting temporarily";
        } else {
            toggleRedirectBtn.classList.add("success");
            toggleRedirectBtn.textContent = "Re-enable redirecting";
        }
    }

    function setEnabled(enabled) {
        isEnabled = enabled;
        updateToggleRedirectBtn();
        browserAPI.sendMessage({action: "setEnabled", enabled: isEnabled});
    }

    browserAPI.sendMessage({action: "isEnabled"}, enabled => {
        isEnabled = enabled;
        updateToggleRedirectBtn();
    });

    function saveVersion() {
        browserAPI.api.storage.local.set({pyVersion: this.value});
        browserAPI.sendMessage({action: "setPyVersion", pyVersion: this.value});
    }

    toggleRedirectBtn.addEventListener("click", () => setEnabled(!isEnabled));
    versionSelector.addEventListener("change", saveVersion);
})();
