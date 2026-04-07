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



