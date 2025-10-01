console.log("Arrow Function");

const add = (a, b) => a + b;
console.log("add(2,3):", add(2, 3));

const person = {
  name: "Minh",
  sayHello: function () {
    setTimeout(() => {
      console.log("Arrow giữ this:", this.name);
    }, 500);
  }
};
person.sayHello();
