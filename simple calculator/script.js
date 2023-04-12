document
  .querySelector(".calculate")
  .addEventListener("click", function calculate() {
    let num1 = Number(document.querySelector("#num1").value);
    let num2 = Number(document.querySelector("#num2").value);
    let operater = document.querySelector("#operater").value;
    let results;
    switch (operater) {
      case "add":
        results = num1 + num2;
        document.querySelector(
          ".result"
        ).innerHTML = `Addition of ${num1} and ${num2} is ${results}`;
        break;
      case "sub":
        results = num1 - num2;
        document.querySelector(
          ".result"
        ).innerHTML = `substarction of ${num1} and ${num2} is ${results}`;
        break;
      case "mul":
        results = num1 * num2;
        document.querySelector(
          ".result"
        ).innerHTML = `Multiplication of ${num1} and ${num2} is ${results}`;
        break;
      case "divi":
        results = num1 / num2;
        document.querySelector(
          ".result"
        ).innerHTML = `Division of ${num1} and ${num2} is ${results}`;
        break;
      default:
        document.querySelector(".results").innerHTML = "Invalid operation";
    }
  });
// let form = document.getElementById("form");
// function handleForm(event) {
//   event.preventDefault();
// }
// form.addEventListener("submit", handleForm);
