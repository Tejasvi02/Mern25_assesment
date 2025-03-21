let Student = {
    FirstName : "Stacy",
    Standard : "Higher Secondary",
    Session : "Final Session",
    TotalMarks : "75%",
    Subject : {
        Physics : 80,
        Chemistry : 89,
        Language : 92
    }
}

//print firstname, total marks and Individual Subject Marks, using object and nested destructuring
//along with that also create a lastname and Ecology as (marks) "95", without making any change in Student
let{FirstName,TotalMarks,Subject:{Physics,Chemistry,Language}} = Student
let LastName = "Mathew"; //adding lastname and ecology marks
let Ecology = 95;
console.log(FirstName)
console.log(LastName)
console.log(TotalMarks)
console.log(Physics)
console.log(Chemistry)
console.log(Language)
console.log(Ecology)

console.log("=============================2nd question==================================")
//create an array of your aspirations, print first three to achieve in 2024,25,26 and keep others in ...rest operator, using array destructuring 
let[goal2024,goal2025,goal2026, ...restyears] = ["Finish assessments","Eat Healthy","Complete Certification","Score high","Learn Mern"]
console.log(goal2024)
console.log(goal2025)
console.log(goal2026)
console.log(restyears)

console.log("=============================3rd question==================================")
//create a funtion with name multiply which accepts three parameters, and return multiplication of all
//but if we dont pass any parameter it returns 0
function multiply(p1=0,p2=0,p3=0){
    return p1*p2*p3
}
console.log(multiply()) //returns 0
console.log(multiply(70,60)) //deafult p3 value is 0
console.log(multiply(5,6,10))

console.log("=============================4th question==================================")
//create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop
let numbers = [1,2,3,4,5]
numbers[5] = 6; //adding new value at 6th place

//printing using for..of
for(let x of numbers){
    console.log(x) //elements can be accessed directly x is value here
}

//printing using for..in
for (let x of numbers){
  console.log(numbers[x]) //x is the index here
}

console.log("=============================5th question==================================")
//create an example of const where we can update on property of the object, where it says const is mutable
const product ={name: "Laptop", price: 999.99}
product.price= 720.45
console.log(product) //const product's property price has been updated

console.log("=============================6th question==================================")
//create a for loop using var and let, print each value in timeout after 2 second and try to 
//demonstrate functional scope of var and lexical of let 
console.log("Using var:");
for (var i = 0; i < 3; i++) {
    console.log(i)
    setTimeout(function() {
        console.log("var i:", i); // prints 3, 3, 3 (after 2 seconds)
    }, 2000);
}

console.log("Using let:");
for (let j = 0; j < 3; j++) {
    setTimeout(function() {
        console.log("let j:", j); // prints 0, 1, 2 (after 2 seconds)
    }, 2000);
}