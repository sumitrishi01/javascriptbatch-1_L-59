
//1. function defination is one time process
//function sis always written in camelCase
function myFunctionA(n){ //formal argument/parameters
    console.log('Hello '+n+' Everyone How Are You ?');
}

//2. function calling/invoking ,call/invoke is many time process
myFunctionA("Sumit Rishi"); //Actual argument/parameters

//1. function defination is one time process
let myFunctionB = (n) => { //formal argument/parameters
    console.log(n)
}

//2. function calling/invoking ,call/invoke is many time process 
myFunctionB('Hello Sahil How are You ?')

//1. function defination is one time process
let myFunctionC = (name) => { //formal argument/parameters
    console.log("Hello "+name+" How are You ?")

    // function may return something
    return name;
}

//2. function calling/invoking ,call/invoke is many time process 
myFunctionC('Komal');

let x = myFunctionC('Raju');

// console.log(x);

//spread operator

let a = ['Sumit', "Rishi", `Kiran`,"Prem",'Kanchan'];

console.log(a);
//how to find array lenght
//by -> object.member
console.log(a.length);

let b = [...a,"Rahul",'Gyan',`Rohit`];

console.log(b);

//An arrow function expression is a compact

let j = ['An',"arrow"];
let k = [...j,"function"];
let l = [...k,`expression`];
let m = [...l,'is'];
let n = [...m,`a`];
let o = [...n,'compact'];

console.log(o);

var paragraph=''
for(var i=0; i<o.length;i++){
    console.log(o[i]);
    // paragraph = paragraph +o[i]+' ';
    paragraph += o[i]+' ';
}
console.log(paragraph); 