function doaddition(x,y,z){
   return x+y+z;
}

console.log(doaddition(2,3,4));

console.log(doaddition(2)); //NaN because y and z are undefined

console.log(doaddition(2.3,3)); //NaN because z is uundefined

console.log(doaddition("first", 2, "three")); 
//first2three it considers 2 as string too because the paramter has atleast one string value, + is also string contact operation