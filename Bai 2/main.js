const input = document.querySelector(".input");
const create = document.querySelector(".create");
const body = document.querySelector("body");

create.addEventListener("click", () => {
  function createPyramid() {
    let totalNumberofRows = input.value;
    let output = "";
    for (let i = 1; i <= totalNumberofRows; i++) {
      for (let j = 1; j <= i; j++) {
        output += j + "  ";
      }
      const p = document.createElement("p");

      p.innerHTML = output;
      output = "";

      body.appendChild(p);

      console.log(output);
      output = "";
    }
  }
  createPyramid();
});
