//14. Create an example of generator function of your choice

function *numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGenerator();
console.log(gen.next().value); 
console.log(gen.next().value); 
console.log(gen.next().value); 