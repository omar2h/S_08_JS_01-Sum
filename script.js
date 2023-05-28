function getElement(str) {
  return document.querySelector(str);
}

let num1Input = getElement("#number1");
let num2Input = getElement("#number2");
let sumBtn = getElement("#sumBtn");
let resultOutput = getElement("#result");

sumBtn.addEventListener("click", function () {
  if (
    num1Input.value &&
    num2Input.value &&
    !isNaN(num1Input.value) &&
    !isNaN(num2Input.value)
  )
    resultOutput.value = parseInt(num1Input.value) + parseInt(num2Input.value);
});
