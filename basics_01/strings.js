
// use of backtick , placegolders where we can inject any variable 
const name = "akshi"
// console.log(`my name is ${name}`);

// ********************strings ***************************
// first way 
const gamechanger = "akshi_singhal" // string  akshi_singhal
// second way 
const game = new String ('akshi_26') // string obj [String: 'akshi_26']

// console.log(gamechanger);
// console.log(game);

/**********************some prop of string **************************/

// console.log(gamechanger.length); // not a function 
// fucntions in build 
// console.log(gamechanger.toUpperCase());
// console.log(gamechanger.indexOf('s'));
// console.log(game.charAt(4));

// substring 
const new_substr = gamechanger.substring(0,4)
// console.log(new_substr);

// console.log(gamechanger.slice(0,4));


// extra spaces trimed 
const new_str= "       akshi-singhal-nsut-cse            " 

// console.log(new_str);
// console.log(new_str.trim());

// replace 
const url ="https://www.geeksforgeeks.org/abstraction-in-cpp%20?ref=lbp"

// console.log(url.replace('%20' , '/'));
// console.log(url.includes('akshi')); // t/f

// ***************************convert string to array on base **********************************

const name_str= "akshi-singhal-nsut-cse"

console.log(name_str.split('-'));




