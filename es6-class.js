function Person(name){
    this.name=name;
}
Person.prototype.getName=function()
{
    return this.name;
};
const person1=new Person("Shridhar");
console.log(person1.getName()); // Shridhar



class Student
{
    constructor(name){
        this.name=name;
    }
    getName()
    {
        return this.name.toUpperCase();
    }
    setName(newName){
        newName=newName.trim();
        if(newName==='')
        {
            throw "Name cannot be empty";
        }
        this.name=newName;

    }
}

let p=new Person("Shridhar");
console.log(p); // Shridhar

let person3=new Student("  Shridhar Bhat  ");
console.log(person3.getName()); // SHRIDHAR BHAT