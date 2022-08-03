const numberA = document.querySelector(".number__a");
const numberB = document.querySelector(".number__b");
const sum = document.querySelector(".sum");
const body = document.querySelector("body");

sum.addEventListener("click", () => {
  for (let i = numberA.value; i <= numberB.value; i++) {
    let check = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        check = 1;
        break;
      }
    }
    if (i > 1 && check == 0) {
      const p = document.createElement("p");
      p.innerHTML = `So nguyen to nam trong khoang ${numberA.value} va ${numberB.value} la: ${i}`;
      body.appendChild(p);
    }
  }
});
