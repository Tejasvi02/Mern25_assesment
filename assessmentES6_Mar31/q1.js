// 1. How to preserve the immutability on my heroes list? Solve below problems using the same

const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]

// a. Get heroes who are not evils
let herosNotEvil = heroes.filter(heroObj => heroObj.isEvil == false);
console.log("Heroes Not Evil");
console.log(herosNotEvil);

// b. Print Unique family names
let uniqueFamilyNames = heroes.reduce((prevVal, currVal, index, array)=>{
    prevVal[currVal.family] = prevVal[currVal.family] ? prevVal[currVal.family] + 1 : 1
    return prevVal;
}, []);
console.log("\nUnique family names");
console.log(uniqueFamilyNames);

// c. Print Hero Names from given objects, and append sir in each of them before printing
let heroSir = heroes.map((x) => "Sir " + x.name);
console.log("\nNames with Sir");
console.log(heroSir);

// d. Do we have any hero in Marvel Family who is not evil
let marvelNotEvil = heroes.filter(heroObj => heroObj.isEvil == false && heroObj.family == "Marvel");
console.log("\nMarvel Heroes Not Evil");
console.log(marvelNotEvil);