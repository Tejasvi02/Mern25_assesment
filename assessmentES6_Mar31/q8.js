//8. create an example showing usage of short hand and default param.

//default params
function sum(x1 =0, x2=0, x3=0){
    return x1+x2+x3;
}

console.log(sum(3,6)); //takes default value for x3 as 0
console.log(sum(4)); //x2 and x3 = 0
console.log(sum(8,9,10));


//shorthand
let audi = 200000, bmw = 95069, volvo =68468, honda = 23432;
let car = {
    audi,
    bmw,
    volvo,
    honda,
}
console.log(`Cars with price using shorthand ${JSON.stringify(car)}`)
