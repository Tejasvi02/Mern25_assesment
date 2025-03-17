//constructor function
var classA = function(name, age, city){ 
    this.name = name;
    this.age = age; 
    this.city = city;
 
    this.getDetails = function(){
     console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}`)
    };
 }

 var user = new classA("Alex",50,"Boston")
 user.getDetails();

 //hoisting
 //variable hoisting
console.log(myVar); // Output: undefined
var myVar = 10;
console.log(myVar); // Output: 10

 //function hoisting
 console.log(Sum(4,4)) //but here it will not be undefined, difference 
 function Sum(p1,p2){
 return p1 + p2;
 }

 //closure
 function outerFunction() {
    var outerVariable = "100";
    function innerFunction() {
      console.log(outerVariable); // Accesses outerVariable from outerFunction
    }
    return innerFunction;
  }
  
  var closureExample = outerFunction(); // outerFunction runs and returns innerFunction
  closureExample(); 