console.log("Rest & Spread Operator");


function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log("sum(1,2,3,4):", sum(1, 2, 3, 4));


const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log("Spread array:", arr2);


const obj1 = { name: "Minh", age: 25 };
const obj2 = { ...obj1, city: "HCM" };
console.log("Spread object:", obj2);
