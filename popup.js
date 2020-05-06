(function () {
    let toggleRedirectBtn = document.getElementById("toggleRedirect");
    let versionSelector = document.getElementById("pythonVersion");

    let isEnabled = true;

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

    function restore_version() {
        browserAPI.api.storage.local.get({pyVersion: "3"}, data => {
            versionSelector.value = data.pyVersion;
        });
    }

    function save_version() {
        version = this.value ? this.value : "3";
        browserAPI.api.storage.local.set({
            pyVersion: version,
        });
        browserAPI.sendMessage({action: "setPyVersion", pyVersion: version});
    }

    toggleRedirectBtn.addEventListener("click", () => setEnabled(!isEnabled));
    document.addEventListener("DOMContentLoaded", restore_version);
    versionSelector.addEventListener("change", save_version);
})();
