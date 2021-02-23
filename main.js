const start = document.getElementById('start-btn')
const countdownElDisplay = document.getElementById('countdownTimer')
const startMin = 20
var timeLeft = startMin * 60



start.addEventListener('click', updateTimeleft)
setInterval(updateTimeLeft(), 1000);
function updateTimeleft() {
    const mins = Math.floor(timeLeft / 60);
    let secs = timeleft % 60;



    if (secs < 10) {
        secs = "0" + secs;

    }
    if (mins < 10) {
        mins = "0" + mins;
    }

    if (timeLeft <= 0) {
        clearInterval(timeLeft = 0)
    }


    countdownElDisplay.innerHTML = mins + ":" + secs;
    timeLeft--;
    return

}




