let first = null;
let operation = null;
let second = null;

document.querySelectorAll("button").forEach((el) => {
  el.addEventListener("click", () => {
    digit_pressed(el.textContent);
  });
});

/*
 * TODO: multiple digits numbers
 */
function digit_pressed(digit) {
  if (isNumeric(digit)) {
    if (document.getElementById("calculator-screen").value == 0) {
      document.getElementById("calculator-screen").value = digit;
    } else {
      document.getElementById("calculator-screen").value += digit;
    }

    if (operation == null) {
      first = document.getElementById("calculator-screen").value;
    } else {
      second = document.getElementById("calculator-screen").value;
    }
  }
}

function equation(objButton) {
  operation = objButton.value;
  document.getElementById("calculator-screen").value = 0;
  console.log(first);
  console.log(operation);
}

function isNumeric(value) {
  return /^-?\d+$/.test(value);
}
