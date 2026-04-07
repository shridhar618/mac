var msg="hai";
console.log(msg);

//default parameter
function say(message="hello"){
    console.log(message);
}
say();
say("welcome");

//rest parameter
function fn(a,b,...args){
    console.log(a);
    console.log(b);
    console.log(args);
}
fn(1,2,3,"a","b",true);


//spread operator
const odd=[1,3,5];
const combined=[2,4,6,...odd];
console.log(combined);
const combined2=[...odd,2,4,6];
console.log(combined2);


function sum(a,b,c){
    console.log(a+b+c);
}

const numbers=[10,20,30];
sum(...numbers);


const a=[1,2,3];
const b=[4,5,6];
const combined3=[...a,...b];
console.log(combined3);


const original=[1,2,3];
const copy=[...original];
console.log(copy);


//object literals
function createMachine(name, status){
    return {
        name: name, 
        status: status
    };
}
console.log(createMachine("PES-52", true));

const m1 = createMachine("refrigerator", "active");
const m2 = createMachine("Washing machine", "inactive");
const s1=createMachine("shridhar", "active");
console.log(m1 === m2); // false, different objects in memory


let scores=[90, 80, 70];

//of in for loop
for (let score of scores){
    score=score+5;
    console.log(score);
}
console.log(scores); // original array remains unchanged

//in in for loop
for (let i in scores){
    console.log(i);
}

let e = parseInt('111', 2);
console.log(e); // 7, binary 111 is 7 in decimal

let f = parseInt('1A', 16);
console.log(f); // 26, hexadecimal 1A is 26 in decimal

let h = 0x10;
console.log(h); // 16, hexadecimal 10 is 16 in decimal

let simple='This is a template literal';
console.log(simple);


//multiline string
let multiline=`This is a 
multiline string`;
console.log(multiline);

//insert variables using ${};
let name="Shridhar";
let message=`Hello, ${name}!`;
console.log(message);


//Expressions inside strings
let m=5, n=3;
console.log(`Sum is ${m+n}`); // Sum is 8, treated as a template literal


function getScores(){
    return [90, 80, 70, "xyz"];
}

let score=getScores();
let x=score[0];
let y=score[1];
let z=score[2];
console.log(x,y,z); // 90 80 70


let person={
    firstName: "Shridhar",
    lastName: "Bhat",
};

let fName=person.firstName;
let lName=person.lastName;
console.log(fName, lName); // Shridhar Bhat
