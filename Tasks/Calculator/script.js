const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let input = "";
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    // Clear
    if (button.id === "clear") {
      input = "";
      display.textContent = "0";
      resultDisplayed = false;
      return;
    }

    // Equals
    if (button.id === "equals") {
      if (input === "") return;
      try {
        input = eval(input).toString();
        display.textContent = input;
        resultDisplayed = true;
      } catch {
        display.textContent = "Error";
        input = "";
      }
      return;
    }

    // Operators
    if (["+", "-", "*", "/"].includes(value)) {
      if (input === "" || ["+", "-", "*", "/"].includes(input.slice(-1))) return;
      input += value;
      display.textContent = input;
      resultDisplayed = false;
      return;
    }

    // Numbers & Decimal
    if (resultDisplayed) {
      input = value;
      resultDisplayed = false;
    } else {
      input += value;
    }
    display.textContent = input;
  });
});