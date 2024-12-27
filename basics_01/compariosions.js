// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); // false 
console.log(null == 0); //false 
console.log(null >= 0); // true 

/* equality check ==
    and comparison >,<,>=,<=,<>
    works differently 
    compariosion operators convert null to 0  */

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// all false 

// === 
// also check data type with value 

console.log("2" === 2);