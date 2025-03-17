//---1--------Object.create -for inheritance and polymorphism

var Person = {
    FirstName : "Tej",
    LastName : "K",
    Country : "India",
    getPerson : function(){
        return `First name : ${this.FirstName}
                Last name : ${this.LastName}
                Country: ${this.Country}`
    }
}

var Person1 = Object.create(Person) //creating object of Person
Person1.FirstName ="Joey"
Person1.Country ="USA"

var Person2 = new Object(Person) //overwrites the original object, if we dont use create
Person2.Country = "Canada"

console.log(Person.getPerson()) //overwritten beacuse peron2 has changed the original object
console.log(Person1.getPerson())
console.log(Person2.getPerson())

//---2-------Closure
function Printthis(){
    var a = 10;
    function innerprint(){
        console.log(a)
    }
    return innerprint;
}

var tryprint= Printthis(); //prints value of a, innerprint will have access to a defined in outer function Printthis()
tryprint();

//---3----using prototype adding a information
//creating a constructor function to print user details 
var classA = function(name, age, city){ //constructor function
    this.name = name;
    this.age = age; 
    this.city = city;
 
    this.getDetails = function(){
     console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}, Job: ${this.job}`)
    };
 }
 var user1 =  new classA("Diya",30, "Boston")
 user1.getDetails();
 classA.prototype.job = "developer" //adding one info using prototype
 user1.getDetails();

 //---4--- type of variable is only determined by the value assigned and it can be changed anytime
var data = 10;  
data = "Hello";

//----5 ---- == only compares the value and not the type
//we use ===
var x = 10;
var y = "10"
if(x==y){
    console.log("only value compared for x and y")
}

var a =70;
var b ="70"
if(a===b){
    console.log("type is compared too for a and b")
}

//---6-------callback function
function PrintInfo(info){
    console.log(info)
}
function sum(s1, s2, callbackfn){
    callbackfn(s1+s2)
}

sum(1,4, PrintInfo) //here it print the operation done in sum

//Using the same call back (PrintAccount) to print something else
function userdetail(name, age, country, callbackfn){
    callbackfn(`name - ${name}`)
    callbackfn(`age - ${age}`)
    callbackfn(`country - ${country}`)
}


userdetail("Tej",23,"USA", PrintInfo) //here it prints the user details