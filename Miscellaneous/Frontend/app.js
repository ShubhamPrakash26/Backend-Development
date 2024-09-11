// function PersonMaker(name, age){
//     const person = {
//         name: name,
//         age: age,
//         talk(){
//             console.log(`My name is ${this.name} and I am ${this.age} years old.`);
//         },
//     };
//     return person;
// }

//Constructors - does not return anything and start with capital letter
// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     Person.prototype.talk = function(){
//         console.log(`My name is ${this.name} and I am ${this.age} years old.`);
//     }
// }

//Using Classes
class Person{
    constructor(name, age){
        console.log("Person Created");
        
        this.name,this.age = name,age;
    }
    talk(){
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Student extends Person{
    constructor(name,age,marks){
        console.log("Student Created");
        super(name,age);    //calls the constructor of the parent class
        this.marks = marks;
    }
}

// const person1 = PersonMaker("John", 30);
// const person2 = PersonMaker("Jane", 25);

// let p1 = new Person("Johm", 30);
// let p2 = new Person("Jane", 25);

// p1.talk(); 
// p2.talk();