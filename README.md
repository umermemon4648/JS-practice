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
});;
```


  ### What is Callback
In JavaScript, callbacks are functions that are passed as arguments to other functions and executed when the main function completes. Callbacks can be used to implement both synchronous and asynchronous code.


      
   -> **Synchronous callback example:**


```javascript
let arr = [1,2,3,4,5,6,7,8,9,10]
function separateEvenOdd(arr, callBackFun, arrayName){
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
separateEvenOdd(arr, oddFunc, "Odd Array Element")
separateEvenOdd(arr, evenFunc, "Even Array Element")

```