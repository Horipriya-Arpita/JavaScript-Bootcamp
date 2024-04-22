// var, let, const

// var : Variable can be redeclared & updated.
//       A global scope variable (before 2015 not useful)


// let : Variable cannot be redeclared but can be updated.
//       A block scope variable


// const : Variable cannot be redeclared or updated.
//         A block scope variable


//__________________________________//

// {
//     let age = 24;

//     age = 45;

//     console.log(age);
// }


// {
//     let age = 47;
//     console.log(age);
// }

// const PI = 3.14;
// PI = 34;
// console.log(PI);

//________________________________________//

// const student = {
//     id: 1,
//     name: "Arpita",
//     address: "Sylhet",
//     age: 24,
// }

// console.log(student);
// console.log(typeof student)

// console.log(student.name);
// console.log(student["name"]);

// student.name = "Horipriya";
// console.log(student);

// student["age"]+=10;
// console.log(student);

//_______________________________________________________________//

// How to accept user input

//1. Easy WAY = window prompt
//2. Proffesional way = html textbox


///let username = window.prompt("What is your name?");

//console.log(username);

let input = document.getElementById("nameinput");
let btn = document.getElementById("namesubmit");
let H3 = document.getElementById("H3");
let username;

btn.onclick = function() {
    username = input.value;
    console.log(username);

    H3.textContent = `Helllooo ${username}`
}