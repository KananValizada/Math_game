let startBTN = document.querySelector(".startBTN");
let rightCurtain = document.querySelector(".curtainRight");
let leftCurtain = document.querySelector(".curtainLeft");
let timer = document.querySelector(".timer");
let question = document.querySelector(".question");
let answerBtn = document.querySelector(".answerBtn");
let answer = document.querySelector(".answer");
let score = document.querySelector(".score");
let finalResult = document.querySelector(".finalResult");
let maxResult = document.querySelector(".maxResult");
let btnSubstract = document.querySelector(".btn_substract");
let btnSum = document.querySelector(".btn_sum");
let maxLimitOfNumbers = 1000;
let timeLimit = 20;
let operator = "+";
let inter;

btnSubstract.addEventListener("click", () => {
  btnSubstract.classList.add("active");
  btnSum.classList.remove("active");
  operator = "-";
  rightCurtain.classList.remove("moveRight");
  leftCurtain.classList.remove("moveLeft");
  startBTN.classList.remove("hidden");
  clearInterval(inter);
});

btnSum.addEventListener("click", () => {
  btnSum.classList.add("active");
  btnSubstract.classList.remove("active");
  operator = "+";
  rightCurtain.classList.remove("moveRight");
  leftCurtain.classList.remove("moveLeft");
  startBTN.classList.remove("hidden");
  clearInterval(inter);
});

let time = timeLimit;

let num1 = Math.trunc(Math.random() * maxLimitOfNumbers);
let num2 = Math.trunc(Math.random() * maxLimitOfNumbers);
let result;

function getResult(operator) {
  switch (operator) {
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = num1 + num2;
      break;
  }
}

let curScore = 0;
let maxScore = 0;

startBTN.addEventListener("click", () => {
  question.textContent = num1 + " " + operator + " " + num2;
  getResult(operator);
  curScore = 0;
  time = timeLimit;
  rightCurtain.classList.add("moveRight");
  leftCurtain.classList.add("moveLeft");
  startBTN.classList.add("hidden");
  finalResult.classList.add("hidden");
  maxResult.classList.add("hidden");
  inter = setInterval(() => {
    time--;
    if (time == 0) {
      openResult();
    }
    timer.textContent = time;
  }, 1000);
});

score.textContent = "Nəticə: " + curScore;

answerBtn.addEventListener("click", () => {
  if (answer.value == result) {
    num1 = Math.trunc(Math.random() * maxLimitOfNumbers);
    num2 = Math.trunc(Math.random() * maxLimitOfNumbers);
    getResult(operator);
    question.textContent = num1 + " " + operator + " " + num2;
    curScore++;
    score.textContent = "Nəticə: " + curScore;
    answer.value = "";
  }
});

function openResult() {
  if (maxScore < curScore) {
    maxScore = curScore;
  }
  console.log("kk");
  clearInterval(inter);
  rightCurtain.classList.remove("moveRight");
  leftCurtain.classList.remove("moveLeft");
  startBTN.classList.remove("hidden");
  startBTN.textContent = "Yenidən başla";
  finalResult.classList.remove("hidden");
  maxResult.classList.remove("hidden");
  maxResult.textContent = "Rekord: " + maxScore;
  finalResult.textContent = "Nəticə: " + curScore;
}
