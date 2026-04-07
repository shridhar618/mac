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
