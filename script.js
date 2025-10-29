let display = document.getElementById("display");
let currentValue = "";

function appendValue(value) {
  if (value === "+/-") {
    if (currentValue.startsWith("-")) {
      currentValue = currentValue.substring(1);
    } else {
      currentValue = "-" + currentValue;
    }
  } else {
    currentValue += value;
  }
  display.innerText = currentValue;
}

function clearDisplay() {
  currentValue = "";
  display.innerText = "0";
}

function deleteLast() {
  currentValue = currentValue.slice(0, -1);
  display.innerText = currentValue || "0";
}

function calculate() {
  try {
    currentValue = eval(currentValue.replace("×", "*").replace("÷", "/"));
    display.innerText = currentValue;
  } catch {
    display.innerText = "Error";
    currentValue = "";
  }
}
