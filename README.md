Q1# var vs let vs const 

----> var
-> variable can be re-declared with same name using var
-> hoisting is made possilbe using the var keyword

----> let
-> variable can only be assign a new value


----> const
-> variable can not allowed to re-declare or re-assign value




### What are the possible ways to create objects in JavaScript

1. **Object constructor:**
let obj = new Object({
    name: "umer",
    age: 22,
    city: "karachi",
})

2.**Object's create method:**
const people = {  
  printIntroduction: function ()  
   {  
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);  
  }  
};  
const me = Object.create(people);  
me.name = "Umer";  
me.isHuman = true;
me.printIntroduction();  


   3. **ES6 Class syntax:**

      ES6 introduces class feature to create the objects


      ```javascript
      class Intro {
        constructor(name, age, city){
            this.name = name
            this.age = age
            this.city = city
        }
      }
      let introObj = new Intro("Muhammad Umer", 22, "Karachi")