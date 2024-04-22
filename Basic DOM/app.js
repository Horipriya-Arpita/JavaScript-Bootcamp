
console.log("Hiiii")



// document.getElementById("par").textContent = "new content";


// document.getElementById("head").textContent = "Arpita";


// number, boolean, string

let x = "10";
console.log(x);
console.log(typeof x);

let f = false;
console.log(f);
console.log(typeof f);

let age = 25;
let price = 10.99;
let gpa = 2.1;
let online = true;
let firstname = "Horipriya";

// console.log(`Yor are ${age} years old`);

// console.log(`Yor are ${age} years old`);
// console.log(typeof age);

// console.log(`The price is: $${price}`);
// console.log(typeof price);

// console.log(`Your gpa is : ${gpa}`);
// console.log(typeof gpa);

// console.log(`He is online: ${online}`);
// console.log(typeof online);

// console.log(`My name is : ${firstname}`);
// console.log(typeof firstname);


document.getElementById("H1").textContent = `My name is : ${firstname}`;
document.getElementById("H3").textContent = `I am ${age} years old`;
document.getElementById("pa").textContent = `${firstname} is online: ${online}`;


let s = 30;
s **= 2
s+=3;
console.log(s);

// Operator precedence
//     1. parenthesis
//     2. exponents
//     3. multiplication & division & modulo
//     4. addition & subtraction

let res = 1 + 2*3 + 4**2; 
console.log(res);

let res1 = 12 % 5 + 8 / 2; 
console.log(res1);

let res2 = 6 / 2 ** 7; 
console.log(res2);