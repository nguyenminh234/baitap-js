console.log("Destructuring ");


const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log("Array destructuring:", a, b, c);

// Object destructuring
const user = { id: 1, username: "minh", email: "minh@mail.com" };
const { username, email } = user;
console.log("Object destructuring:", username, email);

// Nested destructuring
const personInfo = { name: "Lan", address: { city: "Hà Nội", zip: 1000 } };
const { address: { city } } = personInfo;
console.log("Nested destructuring:", city);
