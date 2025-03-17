//call()
//Calls a function, and the first parameter is accepted as object and can be accessed by using this is the function which is called
// and the next 2 parameter will be considered as the actual paramteter for that function
//syntax: function.call(objecttobeused, param 1 of the funtion, param2 of the function,..)

//apply()
//does the same as call, but the function parameter is passed as an array
//syntax: func.apply(object argument, [argsArray])

//bind()
//similar to call and apply but can be used in case of delayed execution
//doesn't execute immediately but is retained as scope in the callback function
var user = {
    name: 'Bob',
    greet() {
      console.log('Hi ' + this.name);
    }
  };
  
  setTimeout(user.greet, 1000); // undefined 
  
  setTimeout(user.greet.bind(user), 1000); 