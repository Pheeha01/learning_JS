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
 //there are a lot of Math functions and to use them the syntax would be Math.*the method*(*the variable name*)
 //Math.randow generates numbers from 0 to 1, but if you want to generate whole number you can use Math.floor()(excludes the max) or Math.ceiling()(includes the max)
 //let x = Math.ceil(Math.random()*10);
 //the reason we multiply by 10 is that since the max of a default random is 1, then it will now start generating from 0-9 because of the floor, its still generating decimals but then now with the floor then it forces it to choose whole numbers
 //document.getElementById(`RandomInt`).textContent= x;

 //if statements


//a shortcut for an if statement is the ternary operators,?::,so the if statement above would be written as, ?===if, :===else
//let result = randomNum >usernum ? `your guess is low`: `your guess is high`
//console.log(result)

//String manipulation

let myname= `Tshegofatso Mabotja`;
console.log(`dealing with string manipulation of ${myname}`) 
console.log(myname.length);//the length of my string, how many characters does it have
console.log(myname.charAt(0));//getting a character by its index postion, from index zero to the max length -1
console.log(myname.toUpperCase());//turns your string to uppercase, there is toLowerCase() for lower casing
console.log(myname.indexOf(`f`));//returns the index position number and f will be 6 and if there are many occurences of a letter in a string it will tell us the index position of the first occurence 
console.log(myname.trim());//trims off the white space, at the begining or end of the string
console.log(myname.startsWith(`T`));// checks if a string starts will a certain character, and returns a boolean value and the ooposit id endsWith(`a`)
console.log(myname.includes(`g`));// checks if a string includes a certain character targeted, boolean value
console.log(myname.replaceAll(`o`,``));//replaces all the occurences of a character with another character, so here we are replacing o with nothing
console.log(myname.padStart(17,`-`));//adds characters to a string
console.log(``)
//string slicing

console.log(`slicing strings`)
console.log(myname.slice(3, 10))

//word count javascript

//method chaining, chaining methods to one another for effective coding
//let yourName= window.prompt("Enter your name:")
//let displayName = document.getElementById("displayName")
//yourName = yourName.trim()
//let fixedString = yourName.slice(0, 1).toUpperCase()+yourName.slice(1).toLowerCase()
//displayName.value = fixedString

let fruits = ["banana", "apple", "coconut", "strawberry"]
for(i=0; i<fruits.length; i++){
   console.log(fruits[i])
}
console.log("adding an element at the end of an array, more like pushing in elements")
fruits.push("orange"); 
for(i=0; i<fruits.length; i++){
   console.log(fruits[i])
}
console.log("by default it pops out the last element of the array")
fruits.pop(); 
for(i=0; i<fruits.length; i++){
   console.log(fruits[i])
}
console.log("adds an element at the begining")
fruits.unshift("nartjie"); 
for(i=0; i<fruits.length; i++){
   console.log(fruits[i])
}
console.log("reversing elements")
fruits.reverse();
for(i=0; i<fruits.length; i++){
   console.log(fruits[i])
}


