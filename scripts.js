function moveToNext(current, nextFieldID) {
    if (current.value.length === 1 && nextFieldID) {
        document.getElementById(nextFieldID).focus();
    }
}

function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toISOString().substring(0, 19).replace('T', ' ');
    document.getElementById('date-time').textContent = dateTimeString;
}

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    const interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            display.textContent = "OTP has expired";
            display.classList.add("expired");
        }
    }, 1000);
}

window.onload = function () {
    updateDateTime();
    const threeMinutes = 60 * 3,
        display = document.querySelector('#timer');
    startTimer(threeMinutes, display);
};
