function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, secondsToWait, end) {
  var endtime = getDeadLine(secondsToWait);
  var secondsSpan = document.getElementById('time');
  function updateClock() {
    var t = getTimeRemaining(endtime);
    secondsSpan.innerHTML = ('0' + t.seconds);
    if (t.total <= 0) {
      clearInterval(timeinterval);
      end();
    }
  }
  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

function getDeadLine(secondsToWait){
  var deadline = new Date();
  deadline.setSeconds(deadline.getSeconds() + secondsToWait);
  return deadline;
}

function setPresses(value){
  document.getElementById("presses").innerHTML = value
}

function updatePresses(){
  var pressSpan = document.getElementById("presses");
  pressSpan.innerHTML = parseInt(pressSpan.innerHTML)+1;
}

function getPresses(){
  return parseInt(document.getElementById("presses").innerHTML);
}

function ManageGame(){
  setButtonsDisable(false)
  var secondsToWait= parseInt(prompt("Enter number of seconds"));
  setPresses(0);
  initializeClock('text',secondsToWait, endGame);

  function endGame(){
    alert("Times up! You pressed the button "+ getPresses() +" time(s) in " + secondsToWait +" second(s)." );
    setButtonsDisable(true);
  }
}

function setButtonsDisable(boolValue){
  document.getElementById("goal").disabled=boolValue;
}
