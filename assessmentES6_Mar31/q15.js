//15. Explain your knowledge on function and object protoype what is the purpose of the same - example

function Person(name) {
    this.name = name;
}

Person.prototype.greet = function () { //prototype allows objects to inherit methods
    console.log(`Hello ${this.name}`);
};

const user = new Person("Henry");
user.greet(); 