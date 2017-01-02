(function () {
    let toggleRedirectBtn = document.getElementById("toggleRedirect");
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
        chrome.runtime.sendMessage({action: "setEnabled", enabled: isEnabled});
    }

    chrome.runtime.sendMessage({action: "isEnabled"}, enabled => {
        isEnabled = enabled;
        updateToggleRedirectBtn();
    });

    toggleRedirectBtn.addEventListener("click", () => setEnabled(!isEnabled));
})();
