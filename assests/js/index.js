const equation = document.getElementById("equation");
const result = document.getElementById("result");
const showExpand = document.getElementsByClassName("show-expand");
const keys = document.getElementsByClassName("keys");

keys[0].addEventListener(
  "click",
  function (event) {
    const keyValue = event.target.innerText;
    const id = event.target.id;
    switch (id) {
      case "clear":
        clearScreen();
        break;
      case "backspace":
      case "removeLastItem":
        removeLastItem();
        break;
      case "expand":
      case "expandKeys":
        expandKeys();
        break;
      case "equal":
        displayResult();
        break;
      case "keys":
        break;
      default:
        displayEquation(keyValue);
    }
  },
  false
);

const displayEquation = (keyValue) => {
  const resVal = result.innerText;
  if (resVal.length > 0) {
    equation.innerText = keyValue;
    result.innerText = "";
  } else {
    equation.innerText += keyValue;
  }
};

const clearScreen = () => {
  equation.innerText = "";
  result.innerText = "";
};

const displayResult = () => {
  let equationText = equation.innerText;
  for (let i = 0; i < equationText.length; i++) {
    if (equationText[i] === "x") {
      equationText =
        equationText.slice(0, i) +
        "*" +
        equationText.slice(i + 1, equation.length);
    }
  }
  try {
    result.innerText = eval(equationText);
  } catch {
    result.innerText = "Syntax Error";
  }
};

const removeLastItem = () => {
  const equationText = equation.innerText;
  const resultText = result.innerText;
  if (resultText.length > 0) {
    result.innerText = "";
  }
  if (equationText.length > 0) {
    equation.innerText = equationText.slice(0, equationText.length - 1);
  }
};

const expandKeys = () => {
  for (let i = 0; i < showExpand.length; i++) {
    const currentDisplay = showExpand[i].style.display;
    if (currentDisplay === "") {
      keys[0].style.height = "100%";
      showExpand[i].style.display = "block";
    } else {
      keys[0].style.height = "80%";
      showExpand[i].style.display = "";
    }
  }
};
