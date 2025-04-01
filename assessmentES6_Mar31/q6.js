//6. Give me an example of bind and write its usage, comparison with arrow function

const obj = {
    name: "Alice",
    greet: function() {
        console.log(`Hello, ${this.name}`);
    }
};

const boundGreet = obj.greet.bind(obj);
boundGreet(); 

const arrowGreet = () => console.log(`Hello, ${this?.name}`);
arrowGreet(); // prints Hello, undefined doesn't understand this