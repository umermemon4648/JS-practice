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
     constructor(name, age, city) {
       this.name = name;
       this.age = age;
       this.city = city;
     }
   }
   let introObj = new Intro("Muhammad Umer", 22, "Karachi");
   ```

4. **Object literal syntax:**

The object literal syntax (or object initializer), is a comma-separated set of key-value pair

```javascript
let intro = {
  name: "Muhammad Umer",
  age: 22,
  city: "Karachi",
};
```
   5. **Singleton pattern:**

      A Singleton is an object which can only be instantiated one time.

```javascript
      let object = new (function () {
        this.name = "Muhammad Umer";
        this.age = 22;
        this.city = "karachi";
      })();
```


### What JSON and its common method in JavaScript
JSON stands for JavaScript Object Notation,JSON data is written as name/value pairs, just like JavaScript object properties (in double quotes).

   -> **JSON.stringify:**

      It convert JavaScript objects into JSON format.

```javascript
      let person = {
        name: "umer",
        age: 22,
        city: "karachi",
      } 
      let jsonString = JSON.stringify(person)
```

-> **JSON.parse:**
      It convert JSON string into JavaScript objects.

      ```javascript
      let jsonString = JSON.parse('{"name":"umer","age":22,"city":"karachi"}')
      ```
  ### What is Promises explain with the help of examples
Promises are used in asynchronous operations, where we need to wait for other task to get completed
Promises have three state:

pending: initial state
fulfilled: successfully completed
rejected: operation denied

   -> **Promise example:**


```javascript
      // resolve
   let promise =  new Promise(function(resolve, reject){
    setTimeout(()=> resolve("Promise Resolved"), 5000)
  })
  promise.then((success)=>console.log(success))


// rejected
     let promise =  new Promise(function(resolve, reject){
    setTimeout(()=> reject("Promise Rejected"), 5000)
  })
  promise.catch((error)=>console.log(error))
```


      
   -> **Promise chaining:**


```javascript
      // resolve
function getCart(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cart = {
                items: ["Burger", "Pizza"],
                totalPrize: 200
            }
            resolve(cart)
        }, 3000);
    })
}
function paymentProcess(cart){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(cart.totalPrize>0){
                const paymentDetail = {
                    cardNumber: "1234 5678 9012 3456",
                    expiryDate: "12/24",
                    cvv: "123"
                }

                resolve(paymentDetail)
            }
        }, 3000);
    })
}
function placeOrder(paymentDetail){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const orderDetail = {
                items: ["Burger", "Pizza"],
                totalPrize: 200,
                paymentDetail: paymentDetail,
                status: "Order Placed"
            }
            resolve(orderDetail)
        }, 3000);
    })
}

getCart().then((cart)=> {

    console.log("Cart: ",cart)
    return paymentProcess(cart)
    
})
.then((paymentDetail)=>{
 console.log("Payment Detail: ",paymentDetail)
 return placeOrder(paymentDetail)
})
.then((orderDetail)=>{
    console.log("Order Detail: ",orderDetail)
})
.catch((error)=>{
    console.log("error: ", error)
})
```


  ### What is Callback
In JavaScript, callbacks are functions that are passed as arguments to other functions and executed when the main function completes. Callbacks can be used to implement both synchronous and asynchronous code.


      
   -> **Synchronous callback example:**
   -> *Separating Even and Odd element from an Array using Callback:*


```javascript
let arr = [1,2,3,4,5,6,7,8,9,10]
function separatingEvenOdd(arr, callBackFun, arrayName){
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (callBackFun(arr[i]) =='') {
            continue
        }
        else{
            newArr.push(callBackFun(arr[i]))

        }
    }
    console.log(arrayName,": ",newArr)
}

function oddFunc(a){
    return a%2!=0 ? a:""
}


function evenFunc(a){
    return a%2==0 ? a:""
}
separatingEvenOdd(arr, oddFunc, "Odd Array Element")
separatingEvenOdd(arr, evenFunc, "Even Array Element")

```

  -> **Asynchronous callback example:**
   -> *Fetching game data after 4s*


```javascript
let gamelist = []
let games = {}
const fetchData = (displayData)=>{
    setTimeout(() => {
        gamelist.push(
        {
            name: "Gata V",
            id: 1,
        },

        {
            name: "call of duty modern warfare 2",
            id: 1,
        },
        {
            name: "Granny: Chapter Two",
            id: 3,
        },

        )
        displayData(gamelist)
    }, 4000);
}
const displayData = (data) => {
    console.log(data)
}

fetchData(displayData)
```

 ### What is curring in JS 
urrying in JavaScript is a process that allows you to transform a function with multiple arguments into a sequence of nesting functions
      
   -> **Implementing curring in JS with the help of callback:**


```javascript

function demo(){
    let greeting = "Hello! Fellow Developer"

    return function(){
        return greeting
    }
}

// let myFunc = demo()
// console.log(myFunc()) //without curring
console.log(demo()()) //using curring
```


  ### OOP in JS
In JavaScript, callbacks are functions that are passed as arguments to other functions and executed when the main function completes. Callbacks can be used to implement both synchronous and asynchronous code.


      
   -> **How to implement class constructor and methods within a class in JS:**


```javascript
class Person {
    constructor(firstName, lastName, age, city, country){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.city = city
        this.country = country
    }

    getFullName() {
        const fullName = `This getFullName methods returns Full name of a person as: ${this.firstName} ${this.lastName}`
        return fullName
      }

    getFullAddress(){
        const address = `${this.firstName} ${this.lastName} live in ${this.city}, ${this.country}`
        return address
    }
}

const personObj = new Person("Muhammad", "Umer", 21, "Karachi", "Pakistan")

console.log(personObj.getFullName())
console.log(personObj.getFullAddress())
```

  -> **Encapsulation in JavaScript using both private properties and getter/setter methods::**


```javascript
class BankAccountDetails{
    constructor(accountNo, balance, accountHolder){
        this._accountNo = accountNo
        this._balance = balance
        this._accountHolder = accountHolder
    }
    get account_no(){
        return this._accountNo
    }

    get balance(){
        return this._balance
    }
    get account_holder(){
        return this._accountHolder
    }

    set balance(amount){
        if (amount<0) {
            throw new Error("Balance can not be negative")
        }
        this._balance = amount
    }

    deposit(amount){
        this._balance += amount 
    }

    withdraw(amount){
        if (this._balance < amount) {
            throw new Error("Insufient Balance")
        }
        this._balance -= amount 
    }


}

// Example usage:
const account = new BankAccountDetails('123456789', 10000, 'Muhammad Umer');
account.deposit(5000);
console.log("Balance after deposit: ", account.balance); // Output: 15000
account.withdraw(3000);
console.log("Balance after withdrawal: ",account.balance); // Output: 12000
```

  -> **Implementation of inheritance in JavaScript with static methods, method overloading, and method overriding::**


```javascript
class Animal{
    constructor(name){
        this.name = name
    }

    static breath(){
        console.log("All Animals breath")
    }

    makeSound(){
        console.log(`${this.name} makes a generic sound.`);
    }
}

class Dog extends Animal{
    constructor(name){
        super(name)
    }
      // Method overriding
  makeSound() {
    console.log(`${this.name} barks.`);
  }
    // Static method
    static wagTail() {
        console.log("Dogs wag their tails.");
      }
}

const dogObj = new Dog("Hunter")
dogObj.makeSound()
Dog.breath()
Dog.wagTail()
```


  -> **Implementation of Polmorphism in JavaScript::**


```javascript
class Shape{
    area(){

    }
}
class Circle extends Shape{
    constructor(radius){
        super()
        this.radius =radius
    }

    area(){
       return `The area of Circle: ${Math.PI*this.radius*this.radius}`
    }
}
class Rectangle extends Shape{
    constructor(width, height){
        super()
        this.width = width
        this.height = height
    }
    area(){
        return `The area of Rectangle: ${this.width*this.height}`
    }
}

const shapes = [new Circle(5), new Rectangle(10, 20)];
shapes.forEach(shape => console.log(shape.area()));
```

  ### What is Spread Operator
The spread operator (...) is used to spread the elements of an array or object into another array or object. It can be used in a variety of ways, such as:


      
   -> **Different ways to use Spread Operator(...) in JS :**
   -> *Concatenating arrays::*


```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

```

   -> *Copying arrays:::*


```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // [1, 2, 3]


```

   -> *Creating new arrays:::*


```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5, 6]; // [1, 2, 3, 4, 5, 6]

```


  ### What is rest Operator
The rest operator (...) is used to represent an indefinite number of arguments in function arguments that allow to accept a variable number of arguments. 
      
   -> **Implementation of rest Operator(...) in JS :**

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

sum(1, 2, 3, 4); // 10
sum(1, 2, 3); // 6
sum(1, 2); // 3
sum(1); // 1
sum(); // 0

```


  ### What is Array destructuring
An array destructuring allows you to assign values from an array to variables in a more concise and elegant way
      
   -> **Implementation of Array destructuring in JS with some examples:**

```javascript
const fruitsArray = ['apple', 'banana', 'orange', 'Pomegranate', 'peach'];

const [a, b, c, d, e] = fruitsArray;

console.log(a); // 'apple'
console.log(b); // 'banana'
console.log(c); // 'orange'
console.log(d); // 'Pomegranate'
console.log(e); // 'peach'

// Skipping values
const fruitsArray = ['apple', 'banana', 'orange'];

const [a, , c] = fruitsArray;

console.log(a); // 'apple'
console.log(c); // 'orange'


// Setting Default Values
const fruitsArray = ['apple'];
const [a, b = 'banana'] = fruitsArray;

console.log(a); // 'apple'
console.log(b); // 'banana'

// Rest Syntax 
const fruitsArray = ['apple', 'banana', 'orange'];
const [a, ...rest] = fruitsArray;
console.log(a); // 'apple'
console.log(rest); // ['banana', 'orange']

```


  ### What is Object destructuring
 In object Destructuring, you can extract properties and assign them to variables with the same name as the property in an elegant way
      
   -> **Implementation of Object destructuring in JS with some examples:**

```javascript

//Basic object destructuring 
const person = { name: 'Muhammad Umer', age: 21 };
const { name, age } = person;

console.log(name); // 'Muhammad Umer'
console.log(age); // 21


//Without object destructuring 
const person = { name: 'Muhammad Umer', age: 21 };

console.log(person.name); // 'Muhammad Umer'
console.log(person.age); // 21

// Object destructuring with new variable names
const person = { name: 'Muhammad Umer', age: 21 };
const { name:fullName, age: yearsOld } = person;

console.log(fullName); // 'Muhammad Umer'
console.log(yearsOld); // 21

// Object destructuring with nested properties
const person = { name: 'Muhammad Umer', address: { city: 'Karachi', province: 'Sindh' } };
const { name, address: { city, province } } = person;

console.log(name); // 'Muhammad Umer'
console.log(city); // 'Karachi'
console.log(province); // 'Sindh'

// Object destructuring with a rest parameter
const student = {
  name: "Umer",
  rollno: 16,
  skills: {
    web: "HTML, CSS, JS, ReactJS",
    mobileDev: "React Native, Dart, Flutter",
  }
}
const {name, rollno, ...mySpreadOp} = student
console.log(name)
console.log(rollno)
console.log(mySpreadOp)



```


 ### What is setTimeout, setInterval, clearInterval
 In object Destructuring, you can extract properties and assign them to variables with the same name as the property in an elegant way
      
   -> **Implementation of setTimeout in JS with example:**
   -> ***The setInterval() function is commonly used to set a delay for functions that are executed again and again, :***

```javascript

function add(a,b) {
  return a + b;
}

let sum = 0;
setInterval(function() {
  sum = add(sum, 1);
  console.log("Sum: ", sum);
}, 1000);
```

   -> **Implementation of Timeout function within single example:**

```javascript

setTimeout(() => {
  console.log('Delayed message');
}, 2000);
let counter = 0
let intervalId = setInterval(() => {
  console.log('Interval message');
  counter++;
  if (counter === 8) {
    clearInterval(intervalId);
  }
}, 1000);


```



      
   -> **closure example:**


```javascript
function add(a,b){
    let c = a+b
    console.log("c: ",c)
    return function(d){
        return `The sum of Three numbers: ${c+d}`
    }
}

let myFunc = add(2,3)
let closureFunc = myFunc(16)
console.log(closureFunc)

```

