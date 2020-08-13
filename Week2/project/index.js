/**
  In this week 's project you'll be making a Pomodoro Clock!
  A user can specify how many minutes the timer should be set, and with a click on the play button it starts counting down!If the user wants to pause the timer, they can do so by clicking the pause button.

  If the timer is running, the user can 't change the session length anymore
  Use at least 3 functions
  Display minutes and seconds
  If the timer finishes the timer should be replaced by the message: Time 's up!
 * 
 */
 const inputInterval = document.getElementById('inputTime');
 const minutes = document.getElementById('minutes');
 const seconds = document.getElementById('seconds');
 const column = document.getElementById('column');
 const intervalDown = document.querySelector('.fa-arrow-down');
 const intervalUp = document.querySelector('.fa-arrow-up');
 const playBtn = document.querySelector('.fa-play');
 const pauseBtn = document.querySelector('.fa-pause');
 const stopBtn = document.querySelector('.fa-stop');

 //duration in seconds
 let duration = 1500;
 // global vars for timer
 let startTime;
 let secToEnd;
 let timer;
 let status = 'clear';


 
 
 function getInterval() {
    let userInput = parseInt(inputInterval.innerText);
    if (userInput >= 1) {
      intervalDown.classList.remove('hover');
      duration = parseInt(inputInterval.innerText) * 60;
      minutes.innerText = inputInterval.innerText;
      seconds.innerText = '00';
    } else {
      intervalDown.classList.add('hover');
      inputInterval.innerText = '1';
      duration = 60;
      minutes.innerText = '1';
      seconds.innerText = '00';
    }
 }

 function checkArrows(e) {
   if (status === 'clear') {
     if (e.target === intervalDown) {
      inputInterval.innerText = parseInt(inputInterval.innerText) - 1;
     } else {
      inputInterval.innerText = parseInt(inputInterval.innerText) + 1;
     }
     getInterval();
   } else {
    intervalDown.classList.add('hover');
    intervalUp.classList.add('hover');
   }
 }
 
function startTimer() {
  status = 'timer';
  let secGone = Math.round((Date.now() - startTime) / 1000);
  secToEnd = duration - secGone;
  if (secGone < duration) {
    minutes.innerText = Math.floor(parseInt(secToEnd) / 60);
    let sec = parseInt(secToEnd) % 60;
    seconds.innerText = (sec.toString().length < 2 ? '0':'') + sec;
  } else {
    timeUp();
  }
}

function timeUp() {
  minutes.style.display = 'none';
  seconds.style.display = 'none';
  column.innerText = 'Time\'s up!';
  status = 'finished';
}


intervalDown.addEventListener('click', checkArrows);
intervalUp.addEventListener('click', checkArrows);
playBtn.addEventListener('click', e => {
  startTime = Date.now();
  timer = setInterval(startTimer, 1000);
  // timer;
  playBtn.style.display = 'none';
  stopBtn.style.display = 'inline';
  pauseBtn.classList.remove('hover');
});
stopBtn.addEventListener('click', e => {
  clearInterval(timer);
  minutes.style.display = 'inline';
  seconds.style.display = 'inline';
  column.innerText = ':';
  playBtn.style.display = 'inline';
  stopBtn.style.display = 'none';
  status = 'clear';
  intervalDown.classList.remove('hover');
  intervalUp.classList.remove('hover');
  getInterval();
})
pauseBtn.addEventListener('click', e => {
  if (status === 'timer') {
    clearInterval(timer);
    duration = secToEnd;
    pauseBtn.classList.add('hover');
    playBtn.style.display = 'inline';
    stopBtn.style.display = 'none';
    status = 'paused';
  } else {
    pauseBtn.classList.add('hover');
  }
})
