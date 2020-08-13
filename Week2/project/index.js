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
 const intervalDown = document.querySelector('.fa-arrow-down');
 const intervalUp = document.querySelector('.fa-arrow-up');
 const playBtn = document.querySelector('.fa-play');
 const pauseBtn = document.querySelector('.fa-pause');
 //duration in seconds
 let duration = 1500;
 let startTime;


 
 
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
 
function startTimer() {
  let secGone = Math.round((Date.now() - startTime) / 1000);
  let secToEnd = duration - secGone;
  console.log(secToEnd);
  if (secGone <= duration) {
    minutes.innerText = Math.floor(parseInt(secToEnd) / 60);
    seconds.innerText = parseInt(secToEnd) % 60;
  }
}


intervalDown.addEventListener('click', e => {
  inputInterval.innerText = parseInt(inputInterval.innerText) - 1;
  getInterval();
});
intervalUp.addEventListener('click', e => {
  inputInterval.innerText = parseInt(inputInterval.innerText) + 1;
  getInterval();
});
playBtn.addEventListener('click', e => {
  startTime = Date.now();
  setInterval(startTimer, 1000);
});

