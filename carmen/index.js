for (let i = 0; i < 10; i++) {
  let button = document.createElement("button");
  button.textContent = "button " + i;
  button.onclick = function () {
    console.log("clicked button " + i);
  };
  document.body.append(button);
}

console.log();
document.querySelector("#submit").addEventListener("click", () => {
  let input = document.querySelector("#test");

  console.log(input);
  console.log(input.value);
  document.querySelector("#outlet").textContent = input.value;
});
