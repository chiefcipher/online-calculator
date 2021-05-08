

let output = document.querySelector("#output");
let history = document.querySelector("#history");

function displayOutput(toPrint) {
  output.innerText = toPrint;
}

function getOutputValue() {
  return output.innerText;
}

function formatNumbers(toFormat) {
  let f = new Intl.NumberFormat("en", {
    style: "decimal",
    maximumFractionDigits: 4,

    //minimumIntegerDigits : 8
  });

  let formatted = f.format(toFormat);
  return formatted;
}

function removeFormat(toRemove) {
  let op = toRemove;
  op = op.replace(/,/g, "");
  return op;
}

//NUMBER SECTION
var numbers = document.querySelectorAll(".btn--number"); // add numbers click event function to numbers
for (var i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function () {
    if (this.id != ".") {
      let added = formatNumbers(removeFormat(getOutputValue()) + this.id);
      displayOutput(added);
    } else {
      let isPeriod = false;
      for (let i = 0; i < getOutputValue().length; i++) {
        if (getOutputValue()[i] == ".") {
          isPeriod = true;
        }
      }
      if (getOutputValue()[getOutputValue().length - 1] != "." && !isPeriod) {
        let added = getOutputValue() + ".";
        displayOutput(added);
      }
    }
  });
}

//CONTROL SECTION FOR CLEAR AND ON OPERATIONS
var controls = document.querySelectorAll(".btn--control");
for (var i = 0; i < controls.length; i++) {
  controls[i].addEventListener("click", function () {
    if (this.id == "power") {
      displayOutput("0");
      history.innerText = "";
    } else if (this.id == "clr") {
      if (output.innerText.length > 1) {
        let removedLastDigit = output.innerText.substr(
          0,
          output.innerText.length - 1
        );
        displayOutput(removedLastDigit);
      } else {
        displayOutput("0");
      }
    }
  });
}

//OPERATOR SECTION FOR BASIC CALCULATIONS
var operators = document.querySelectorAll(".btn--operator");
for (var i = 0; i < operators.length; i++) {
  operators[i].addEventListener("click", function () {
    if (this.id != "=") {
      if (output.innerText == "0") {
        let currentH = history.innerText;
        currentH = currentH.substr(0, currentH.length - 1) + this.id;
        history.innerText = "";
        displayHistory(currentH);
      } else {
        displayHistory(output.innerText + this.id);
        displayOutput("0");
      }
    } else {
      result = eval(removeFormat(history.innerText + output.innerText));
      history.innerText = "";
      displayOutput(formatNumbers(result));
    }
  });
}

function displayHistory(toPrint) {
  history.innerText += toPrint;
}
