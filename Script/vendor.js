
const userInput = document.getElementById("input-number");
const addBtn = document.getElementById("Add-btn");
const subtractBtn = document.getElementById("Subtract-btn");
const multiplyBtn = document.getElementById("Multiply-btn");
const dividedBtn = document.getElementById("Devided-btn");
const EqualtoBtn = document.getElementById("Equalto-btn");


const currentResultOutput = document.getElementById("current-result")
const currentCalculationOutput = document.getElementById("current-calculation")


function outputResult(result, text) {
  currentResultOutput.textContent = result;
  currentCalculationOutput.textContent = text;
}
