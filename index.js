//log "Hello World" to the console, same as print in Python
console.log(`Hello World`);

//trigger an alert box
//alert("Hello World");

//polluting the heading value by calling it with its ID name
document.getElementById(`heading1`).textContent=`I am learning JavaScript`;

//variable declaration and assignment, you can also declare and assign separately
let name = `Tshegofatso`;
let age = 25;

//for value interpollation you should use these `` quotes and for consistency use them throughout your code
console.log(`My name is ${name} and i am ${age} years old`);

//using variables in our webpage
let fullname = `Tshegofatso Mabotja`
let ageyears = 25;
let aps = 28;

document.getElementById(`FName`).textContent= `My name is ${fullname}`;
document.getElementById(`yearsold`).textContent= `I am ${ageyears} years old`;
document.getElementById(`gpa`).textContent= `My grade 12 APS is ${aps}`;

//arithmetic operators and to power a number you should use 2 esterics **
let students= 30
students += 1; //students++;
console.log(students)
students *= 2;
console.log(students)
students /= 2;
console.log(students)
students -= 2; //students--;
console.log(students)

//user input, in two ways, windows prompt and the use of a HTML textbox, USER INPUT IS ALWAYS A STRING, IT NEEDS YOU DO CONVERT TO ANOTHER DATA TYPE IF THAT WHAT YOU NEED
//1. Window Prompt
 /*let Name;
 Name = window.prompt("what is your name? ")
 console.log(Name)*/

 //2. using HTML textbox elements
 let username, Age, APS;
 document.getElementById(`submit`).onclick= function(){
    username= document.getElementById(`UserName`).value;
    Age= document.getElementById(`UserAge`).value;
    Age= Number(Age)
    APS= document.getElementById(`UserGPA`).value;
    APS = Number(APS)
    document.getElementById(`Details`).textContent= `Your name is ${username} and you are ${Age} years old and your APS is ${APS}`
 }

let numb=0;
 document.getElementById(`Increase`).onclick=function(){
    numb++
    document.getElementById(`Number`).textContent=numb
 }
document.getElementById(`Reset`).onclick=function(){
    document.getElementById(`Number`).textContent=0
    numb=0
 }
 document.getElementById(`Decrease`).onclick=function(){
    numb--;
    document.getElementById(`Number`).textContent=numb
 }
