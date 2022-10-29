let first = null;
let operation = null;
let second = null;
let solution = null;

document.querySelectorAll("button:not([class])").forEach((el) => {
  el.addEventListener("click", () => {
    digit_pressed(el.textContent);
  });
});

function digit_pressed(digit) {
  if (isNumeric(digit)) {
    if (solution != null) {
      reset();
      document.getElementById("calculator-screen").value = 0;
    }
    if (document.getElementById("calculator-screen").value == 0) {
      document.getElementById("calculator-screen").value = digit;
    } else if (
      first != null &&
      second == null &&
      operation != null &&
      document.getElementById("calculator-screen").value == 0
    ) {
      document.getElementById("calculator-screen").value = digit;
    } else if (
      operation != null &&
      second == null &&
      document.getElementById("calculator-screen").value != 0
    ) {
      document.getElementById("calculator-screen").value = digit;
    } else {
      document.getElementById("calculator-screen").value += digit;
    }
  }

  if (operation == null) {
    first = document.getElementById("calculator-screen").value;
  } else if (operation != null && equation != null) {
    second = document.getElementById("calculator-screen").value;
  }
}

function reset() {
  first = null;
  second = null;
  operation = null;
  solution = null;
}

function allClear() {
  reset();
  document.getElementById("calculator-screen").value = 0;
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
  if (operation == null) {
    operation = objButton.value;
    document.getElementById("calculator-screen").value = first;
  } else {
    alert(
      "Please only use two numbers. Press AC to start over or = for solution!"
    );
  }
}

function isNumeric(value) {
  return /^-?\d+$/.test(value);
}
