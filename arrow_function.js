//normal function
let add=function(x,y)
{
    return x+y; 
};
console.log(add(5,3)); // 8


//arrow function
let addArrow=(x,y)=>x+y;
console.log(addArrow(5,3)); // 8


let numbers=[4,2,6,1,5,3];
numbers.sort((a,b)=>a-b);
console.log(numbers); // [1, 2, 3, 4, 5, 6]
numbers.sort((a,b)=>b-a);
console.log(numbers); // [6, 5, 4, 3, 2, 1]