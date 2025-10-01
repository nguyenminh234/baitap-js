console.log("===== 1. let, const vs var =====");

var x = 10;
if (true) {
  var x = 20;
}
console.log("var x:", x); // 20

let y = 10;
if (true) {
  let y = 20;
  console.log("let y trong block:", y); // 20
}
console.log("let y ngoài block:", y); // 10

const z = 30;
console.log("const z:", z);
