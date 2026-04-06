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