const score  =400

const balance = new Number(100)
// console.log(balance.toString().length);  #3


/* precision value till what decimal value ??*/
// console.log(balance.toFixed(2));

/* to precision -> i/p bw 1-21(round off kerdeta hai)
                return a string thats interger -ve/+ve */

const othernumber=123.8966
// console.log(othernumber.toPrecision(2)); //1.2e+2
// console.log(othernumber.toPrecision(3)); // 124
// console.log(othernumber.toPrecision(4)); //123.9 

/****************representing number in readable form***************************/
const hundred = 1000000

// console.log(hundred.toLocaleString());// 1,000,000
// console.log(hundred.toLocaleString('en-IN'));//10,00,000


/*********************************Maths**************************/

// console.log(Math); //Object [Math] {}
// console.log(Math.abs(-4)); //4
// console.log(Math.round(4.3)); //4
// console.log(Math.ceil(4.2)); //5
// console.log(Math.floor(4.9)); //4
// console.log(Math.min(3,2,5,6,8));//2
// console.log(Math.max(3,5,6,8,9));//9

console.log(Math.random()); // value bw 0-1

console.log(Math.random() *10 )+1; // value bw 0-10 +1 start from one 

// bw some max , min value 
const MAX =20
const MIN =10

console.log(Math.floor(Math.random()* (MAX-MIN+1)) + MIN);// bw MIN and MAX 









