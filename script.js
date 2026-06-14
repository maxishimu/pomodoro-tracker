let timeLeft = 25 * 60;
let timer = null;

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    document.getElementById("timer").textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function startTimer() {
    if (timer) return;

    timer = setInterval(() => {
        timeLeft--;

        updateDisplay();

        if (timeLeft <= 0) {
            clearInterval(timer);
            timer = null;
            alert("Pomodoro finished!");
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    stopTimer();
    timeLeft = 25 * 60;
    updateDisplay();
}

updateDisplay();
