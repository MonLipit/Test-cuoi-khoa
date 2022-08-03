function drawTriangle(t) {
  for (let i = 1; i <= t; i++) {
    for (let j = 1; j <= i; j++) {
      console.log(j + " ");
    }

    console.log("\n");
  }
}
let t = 5;
drawTriangle(t);
