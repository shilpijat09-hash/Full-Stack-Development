let users = [
    { name: "John", age: 25 },
    { name: "Emma", age: 16 },
    { name: "Alex", age: 20 }
];
let result = users
    .filter(user => user.age >= 18)
    .map(user => user.name);
console.log(result);