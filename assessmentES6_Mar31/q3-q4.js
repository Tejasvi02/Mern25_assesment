//3. Print the last name through destructuring and add a contact number:9119119110 as well
const person = {
    userDetails :{
        first: "FirstName",
        last: "LastName"
    }
}


const { userDetails: { last } } = person;
const contactNumber = 9119119110;

console.log(`Last Name: ${last}, Contact: ${contactNumber}`);

//4. Give me an example of const data manipulation
const x =10;
//x=7; - can't change value of x
console.log(x);

//in Array
const arr = [1, 2, 3, 4];
arr.push(5); //can add
arr[0] = 10;  
//arr = [10, 20, 30]; - cant reassign values
console.log(arr);

//using object
const animal = {name: "Tiger", isWild: true}
animal.isWild= false; // we can edit the data using object reference 
console.log(animal)