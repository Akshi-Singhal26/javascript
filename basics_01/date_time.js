// date object => represent a single moment 

const mydate = new Date(); //instance of date obj
console.log(mydate);//2024-12-29T16:32:52.351Z
console.log(mydate.toString()); //Sun Dec 29 2024 16:36:29 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toJSON());//2024-12-29T16:36:51.611Z
console.log(mydate.toDateString());//Sun Dec 29 2024
console.log(mydate.toISOString());//2024-12-29T16:38:29.934Z
console.log(mydate.toLocaleDateString());//12/29/2024
console.log(mydate.toLocaleString()); // 12/29/2024, 4:38:29 PM
console.log(mydate.toLocaleTimeString());//4:38:29 PM
console.log(mydate.toTimeString());//16:38:29 GMT+0000 (Coordinated Universal Time)
console.log(mydate.toUTCString());//Sun, 29 Dec 2024 16:38:29 GMT


console.log(typeof(mydate)); //object

// make a specific date only 
let mycreate_date = new Date(2023,0,23) //month start from 0-jan
console.log(mycreate_date.toDateString());//Mon Jan 23 2023

// with hr and min 
let mycerate_newdate = new Date( 2023,0,20,5,3)
console.log(mycerate_newdate.toLocaleString());

// yyyy|mm|dd
let mycreate_date3 = new Date("2023-01-14")// start from 01
console.log(mycreate_date3);//2023-01-14T00:00:00.000Z

// in form mm\dd\yyyy
let mycreate_date4= new Date("01-14-2023")
console.log(mycreate_date4);

/*************************** timestamp ****************************/

let mytime_stamp = Date.now()
console.log(typeof(mytime_stamp)); // number 

//we should compare dates in millisecond only
// compare 2 time (date)?

console.log(mycerate_newdate.getTime());//1674190980000 some number 
// we can compare mytime_stamp and mycreate_date now 

// to represent in second ??

console.log(Math.floor(Date.now()/1000)); //1736081222 in sec 
// we could have used round in it also 


/*methods with date*/

let newdate = new Date(2023,0,6)

console.log(newdate.getDay()); //0-> monday
console.log(newdate.getMonth()+1);//0->jan || adding one makes sure month start from 1 in output 

//if u want to write time use backtick 

 console.log(`${newdate.getDate()} is the date and ${newdate.getTime()} is the time `);
//  6 is the date and 1672963200000 is the time  


/* NOTE */
newdate.toLocaleString('default',{
    weekday:'long',
})