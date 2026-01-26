console.log("Script loaded successfully.");
console.log("hi , my name is Rehema Wambui,i am 21 years old and i am studying software engineering.");
const yourName = "Rehema Wambui";
console.log("My name is " + yourName);
const age = 21;
console.log("I am " + age + " years old.");
const fieldOfStudy = "software engineering";
console.log("I am studying " + fieldOfStudy + ".");

console.log("hi,my name is " + yourName + ",i am " + age + " years old and i am studying " + fieldOfStudy );


const myAge = 16;
if(myAge>=18){
    console.log("eligible ");
}
else{
    console.log("not eligible");
}

function greet() {
  console.log("Hello!");
}
greet();


function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Rehema");
greet("visitor");



function greet(person) {
  console.log("Hello " + person);
}

greet("Rehema");
greet("Friend");

function yourAge(age) {
    if(age>=18){
        console.log("Adult");
    } else{
        console.log("Minor");
    }
}
yourAge(20);
yourAge(16);




function multiply(r,w){
    console.log(r*w);
}
multiply(3,4);
multiply(10,5);


function double(num) {
    return num * 2;
}

const answer = double(6);
console.log(answer);
