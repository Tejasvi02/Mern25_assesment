//12. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)

let numbers = [1,2,3,4,5,6]

let multiply = function(...nums){
    let product = 1;
    product = nums.reduce((prevVal,currVal, index, array) =>{
        return prevVal*currVal;
    })
    console.log(product);
}

multiply(...numbers); //same as q2 but here we are not using apply