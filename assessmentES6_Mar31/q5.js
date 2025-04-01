//5. What is the difference between for-of and for-in show with examples

//for of is generally used for iteratable - Array, String, Map etc
//gives values directly, no need to access with the index
let fruits = ["Apple", "Mango","Guava"];
for (let fruit of fruits){
    console.log(fruit)
}

//for in loop is used for objects/ non iterable generally
//it gives the index while iterating
for(let fruit in fruits){
    console.log(fruit) //prints the index
    console.log(fruits[fruit]) //to access element
}

//Trying for of and for in for object
let fruitobj ={name: "Strawberry", color: "pink"}
for(let fruit in fruitobj){
    console.log(fruit) //prints key
    console.log(fruitobj[fruit]) //prints value
}

//can't use for of for object -- TypeError
// for(let fruit of fruitobj){
//     console.log(fruit);
// }
