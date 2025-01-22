const marvel =["thor", " ironman"," spiderman" ]
const dc_heros =["superman", "flash" ,"batman"]

// marvel.push(dc_heros)
// console.log(marvel); //['thor', ' ironman', ' spiderman', [ 'superman', 'flash', 'batman' ] ]
// this gives us array in array rather then adding elemnts of dc heros as individual arrays

// we can use conact
const all_heros = marvel.concat(dc_heros) 
// console.log(all_heros);  //[ 'thor', ' ironman', ' spiderman', 'superman', 'flash', 'batman' ]

/* we can use spread operator : better for concat more arrays in one  */

const all_new_heros= [...marvel,...dc_heros]
// console.log(all_new_heros);



const array1= [1,2,3,[4,5,6],7,[8,9,1,[4,5]]]
// use of flat
const real_arr = array1.flat(Infinity)// can be 1 , 2 anything 
// console.log(real_arr);


// convert string to array 
console.log(Array.from("akshi"));
 console.log(Array.from({name:"akshi"})); // gives out empty array as need to specify
 // out of key or value which need to be converted to an array
 

// check if something is an array 

console.log(Array.isArray("hitesh"));


// .of return new array from set of elemnts 
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));

