let timer = 0;
let interval = null;

function startTimer() {
  if (interval) return;
  interval = setInterval(() => {
    if (timer < 30) {
      timer += 3;
      document.getElementById('timer').textContent = timer;
    } else {
      clearInterval(interval);
    }
  }, 3000);
}

function stopTimer() {
  clearInterval(interval);
  interval = null;
}

function resetTimer() {
  stopTimer();
  timer = 0;
  document.getElementById('timer').textContent = timer;
}
