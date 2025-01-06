const myarr=[0,1,2,3,4,5] // in [] brackets
const myhero=["shaktiman","nagraj"]

const myarr2= new Array(1,2,3,4)
// console.log(myarr[0]);

console.log("A", myarr);

const myn1= myarr.slice(1,3)
console.log(myn1); //[1,2] (3)not included 
console.log(myarr); // slice do not manipulate orginal arr

const myn2= myarr.splice(1,3)
console.log(myn2); //[1,2,3]  includes 3 as well 
console.log(myarr); // splice manipulate the orginal array






