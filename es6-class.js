function Person(name){
    this.name=name;
}
Person.prototype.getName=function()
{
    return this.name;
};
const person1=new Person("Shridhar");
console.log(person1.getName()); // Shridhar