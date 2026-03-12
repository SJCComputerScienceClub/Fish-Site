let inactivityTimer;
const timeoutTime = 30000;

function resetTimer() {
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(() => {
        window.location.href = "index.html";
    }, timeoutTime);
}

["mousemove","click","keydown","scroll","touchstart"].forEach(event => {
    document.addEventListener(event, resetTimer);
});

resetTimer();
