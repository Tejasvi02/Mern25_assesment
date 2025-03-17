var myObject = Object.create(null); //creating object with null prototype

myObject.name = "kelly";
myObject.age = 30;

console.log(myObject); 

//var obj = {}; - when we create like this it will automatically have built-in methods like toString(),
// but if we create object of null prototype it will not have those pre defined methods