const defaultResult = 0;

let curretResult = defaultResult;

let logEntries = [];

// Get Input from Input Field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates and Writes log
function createAndWriteOutput(operator, resultBeforeCalc, CalcNumber) {
  const calcDescription = `${resultBeforeCalc}  ${operator} ${CalcNumber}`;
  outputResult(curretResult, calcDescription); // from Vendor file
}

function writeTolog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
  if (
    calculationType !== "ADD" &&
    calculationType !== "SUBTRACT" &&
    calculationType !== "MULTIPLY" &&
    calculationType !== "DEVIDED"
  ) {
    return;
  }

//   if (
//     calculationType === "ADD" ||
//     calculationType === "SUBTRACT" ||
//     calculationType === "MULTIPLY" ||
//     calculationType === "DEVIDED"
//   ) {
//   }

  const enterNumber = getUserNumberInput();
  const initialResult = curretResult;
  let matchOperation;
  if (calculationType === "ADD") {
    curretResult += enterNumber;
    matchOperation = "+";
  } else if (calculationType === "SUBTRACT") {
    curretResult -= enterNumber;
    matchOperation = "-";
  } else if (calculationType === "MULTIPLY") {
    curretResult *= enterNumber;
    matchOperation = "*";
  } else if (calculationType === "DEVIDED") {
    curretResult /= enterNumber;
    matchOperation = "/";
  }
  createAndWriteOutput(matchOperation, initialResult, enterNumber);
  writeTolog(calculationType, initialResult, enterNumber, curretResult);
}

function add() {
  calculateResult("ADD");
}

function subtract() {
  calculateResult("SUBTRACT");
}

function multiply() {
  calculateResult("MULTIPLY");
}

function devided() {
  calculateResult("DEVIDED");
}

function equalto() {}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
dividedBtn.addEventListener("click", devided);
