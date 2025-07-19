const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clear = document.getElementById('clear');
const equal = document.getElementById('equal');

let input = "";

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
    if (value) {
      input += value;
      display.value = input;
    }
  });
});

clear.addEventListener('click', () => {
  input = "";
  display.value = "";
});

equal.addEventListener('click', () => {
  try {
    const result = eval(input);
    display.value = result;
    input = result.toString(); // Allow chaining calculations
  } catch (err) {
    display.value = "Error";
    input = "";
  }
});
