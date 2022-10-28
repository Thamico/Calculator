let first = null;
let second = null;

document.querySelectorAll("button").forEach((el) => {
  el.addEventListener("click", () => {
    digit_pressed(el.textContent);
  });
});

function digit_pressed(digit) {
  if (first == null) {
    first = digit;
    showDigit(digit);
  } else if (second == null) {
    second = digit;
    showDigit(digit);
  }
}

function showDigit(digit) {
  document.getElementById("calculator-screen").value = digit.toString();
}
