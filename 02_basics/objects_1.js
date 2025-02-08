// can be of two types 
// literals: not a singleton obj, multiple instances .
//constructors : always singleton

/* obj literals (key/value pairs) */
const jsuser={
    name :"akshi",
    age:18,
    location :"jaipur",
    email: "abcd@gmail.com",
    isloggedin:false ,
    lastlogin : ["mon", "sun"],
    "full name" : "akshi singhal"
}

//accessing obj literals 
// first method (.) dot operator 
// console.log(jsuser.email);

// second method : [] key 
// console.log(jsuser["email"]);

/* why to use [] when we have dot operator let say we got data in for of obj 
   now we want access full namre which is in form "full name"(key value) which can be only accessed using[]
   and cant using dot operator as it has a space 

   key contains spaces or special characters. we need to use [] operator to access 
*/

// console.log(jsuser.fullname);  // undefined 
// console.log(jsuser["full name"]); // akshi singhal 


/***********taking symbol and add as an obj *********************/
// define symbol 
const mysym = Symbol("key1")
const user={
    name :"akshi",
    age:18,
    location :"jaipur",
    email: "abcd@gmail.com",
    isloggedin:false ,
    lastlogin : ["mon", "sun"],
    "full name" : "akshi singhal",
//  mysym:"mykey1" *WRONG WAY*
    [mysym]:"mykey1"
}
// can only access using [] operator
// console.log(user[mysym]);


/* chnage value og key */
jsuser.email ="akshisinghal26@gamil.com"
// console.log(jsuser.email);

/* if we want to make no further chnages then we can freeze the obj */
// Object.freeze(jsuser)
// after we freeze no chnages will be reflected to jsuser obj w=even why try to make chnages 


/* taking function in an obj */

jsuser.greeting = function(){
    console.log("hello user");    
}

// console.log(jsuser.greeting()); //hello user

jsuser.greeting_2= function(){
    console.log(`hello user ${this.name}`);    
}

console.log(jsuser.greeting_2());
