let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");

let scoreG = 0;
let scoreH = 0;

function add1home() {
  scoreH++;
  scoreHome.innerText = scoreH;
}
function add2home() {
  scoreH += 2;
  scoreHome.innerText = scoreH;
}
function add3home() {
  scoreH += 3;
  scoreHome.innerText = scoreH;
}

function add1guest() {
  scoreG++;
  scoreGuest.innerText = scoreG;
}
function add2guest() {
  scoreG += 2;
  scoreGuest.innerText = scoreG;
}
function add3guest() {
  scoreG += 3;
  scoreGuest.innerText = scoreG;
}

function resetH() {
  scoreH = 0;
  scoreHome.innerText = scoreH;
}

function resetG() {
  scoreG = 0;
  scoreGuest.innerText = scoreG;
}
