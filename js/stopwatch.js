let timer = 0;
let interval = null;
let flg= false;
function startTimer() {
  if (interval) return;
  interval = setInterval(() => {
    if (timer < 30) {
      timer += 3;
      document.getElementById('timer').textContent = timer;
    } else {
      clearInterval(interval);
    }
  }, 1000);
}

function stopTimer() {
  flg=true
  clearInterval(interval);
  interval = null;
  stopTimer();
}

function resetTimer() {
  if(flg){
      timer = 0;
        document.getElementById('timer').textContent = timer;
  interval=null
  }else{
  timer = 0;
   clearInterval(interval);
  document.getElementById('timer').textContent = timer;
  interval=null
  startTimer()
  flg=false
  }

}
