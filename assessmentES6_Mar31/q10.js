//10. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc

// Map Example
const myMap = new Map();
myMap.set('name', 'Tej');
myMap.set('age', 30); //set
console.log(myMap.size); //size of map
console.log(myMap.get('name')); //get
myMap.clear();
console.log(myMap); 

// Set Example
const mySet = new Set([1, 2, 3, 1]);
mySet.add(4);
console.log(mySet.has(2)); 
console.log(mySet.size); //will be 3 beacuse last elemet 1 is duplicate and set cannot contain duplicate
mySet.clear();
console.log(mySet); //emtied after clear