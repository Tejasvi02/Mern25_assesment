//2. Use the spread and rest operator to create a function which can multiply numbers from 1...n (n is the number of choice), 
//   using apply keyword we need to implement this one

let numbers = [1,2,3,4,5,6]

let multiply = function(...nums){
    let product = 1;
    product = nums.reduce((prevVal,currVal, index, array) =>{
        return prevVal*currVal;
    })
    console.log(product);
}

multiply.apply(null,numbers);
