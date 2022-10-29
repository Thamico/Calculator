let first = null;
let operation = null;
let second = null;
let solution = null;

document.querySelectorAll("button").forEach((el) => {
  el.addEventListener("click", () => {
    digit_pressed(el.textContent);
  });
});

function digit_pressed(digit) {
  if (isNumeric(digit)) {
    if (solution != null) {
      reset();
    }
    if (document.getElementById("calculator-screen").value == 0) {
      document.getElementById("calculator-screen").value = digit;
    } else {
      if (first == null) {
        document.getElementById("calculator-screen").value = digit;
      } else {
        document.getElementById("calculator-screen").value += digit;
      }
    }

    if (operation == null) {
      first = document.getElementById("calculator-screen").value;
    } else {
      second = document.getElementById("calculator-screen").value;
    }
  }
}

function reset() {
  first = null;
  second = null;
  operation = null;
  solution = null;
}

/**
 * TODO: results with float numbers and when entering a operation a 0 comes fix that
 * @param {} eqlButton
 */
function resultNonFloat(eqlButton) {
  if (operation == "+") {
    solution = parseInt(first) + parseInt(second);
    document.getElementById("calculator-screen").value = solution;
  }
  if (operation == "-") {
    solution = parseInt(first) - parseInt(second);
    document.getElementById("calculator-screen").value = solution;
  }
  if (operation == "*") {
    solution = parseInt(first) * parseInt(second);
    document.getElementById("calculator-screen").value = solution;
  }
  if (operation == "/") {
    solution = parseInt(first) / parseInt(second);
    document.getElementById("calculator-screen").value = solution;
  }
}

function equation(objButton) {
  operation = objButton.value;
  document.getElementById("calculator-screen").value = 0;
}

function isNumeric(value) {
  return /^-?\d+$/.test(value);
}
