//merging object

var chain = {color: "gold", price:50, month: "Aug" }
var bag ={color:"blue"}
var ring = {color:"pink" ,price:70}

var merged = {};

merged = Object.assign({},chain,ring,bag) //to merge all the common field, takes the lastest
//can also be written as merged = Object.assign(chain,bag,ring)
console.log(merged)

//export into q10
var shoe = {price:90 , style: "boots"}
module.exports = {shoe};