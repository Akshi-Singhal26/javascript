"use strict";

let score =33;
let score_str ="33"; 

// typecasting 
let value_in_no = Number(score_str);
// console.log(typeof(value_in_no)); // number 
// console.log( value_in_no); //33

//----------------------------------------------------------

score= "33abc"; 

// typecasting 
// value_in_no = Number(score);
// console.log(typeof(value_in_no)); // number 
// console.log( value_in_no); //NaN

//----------------------------------------------------------


// score = NULL 

// typecasting 
// value_in_no = Number(score);
// console.log(typeof(value_in_no)); // number 
// console.log( value_in_no); //0

// /-----------------------------------------------------------

// score_str = undefined; 

// typecasting 
// value_in_no = Number(score_str);
// console.log(typeof(value_in_no)); // number 
// console.log( value_in_no); //NaN


//------------------------------------------------------------

// let isbool =1;

// let islogedin =Boolean( isbool);
// console.log(islogedin);// true 
// console.log(typeof(islogedin));// boolean 


//--------------------------------------------------------
let isbool ="akshi";

let islogedin =Boolean( isbool);
// console.log(islogedin);// true 
// console.log(typeof(islogedin));// boolean 


//-----------------------------------------------

let val_str = 33

let value_str = String(val_str)
// console.log( value_str);//33
// console.log(typeof(value_str));// string 

/********************* Operations ******************/

// console.log("1"+2+2); // 122
// console.log(1+2+"2"); // 32

console.log(+true ); //1
console.log(+""); //0 








