let display = document.getElementById("display");

function inputValue(val) {
  if (display.textContent === "0") {
    display.textContent = val;
  } else {
    display.textContent += val;
  }
}
function clearDisplay() {
  display.textContent = "0";
}
function deleteLast() {
  if (display.textContent.length === 1 || display.textContent === "Error") {
    display.textContent = "0";
  } else {
    display.textContent = display.textContent.slice(0, -1);
  }
}
function calculate() {
  try {
    const result = eval(display.textContent.replace(/×/g, '*').replace(/÷/g, '/'));
    display.textContent = result;
  } catch {
    display.textContent = "Error";
  }
}