//9. Create two objects with some properties and merge them using Object method and ES6 way

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Using Object Method
const merged1 = Object.assign({}, obj1, obj2);
console.log(merged1);

// Using - ES6 Spread Operator
const merged2 = { ...obj1, ...obj2 };
console.log(merged2);