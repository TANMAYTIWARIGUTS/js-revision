let fir=document.getElementById("f");
let sec=document.getElementById("s");
let thi=document.getElementById("t");

fir.addEventListener("click",()=>{
    console.log("first");
}, true)
sec.addEventListener("click",()=>{
    console.log("second");
},)
thi.addEventListener("click",()=>{
    console.log("third");
    
}, 
)
let c=2;
let int=setInterval(function(){

    if(c%2!==0)
    console.log("hey");
else if(c==10)
    clearInterval(int);
else
    console.log("sup?");
c++;
},2000);






// // ==========================
// // JAVASCRIPT MASTER PRACTICE
// // ==========================

// // 1. Variables & Data Types
// let name = "John";
// const age = 25;
// var isDev = true;

// // 2. Functions
// function greet(user) {
//     return `Hello, ${user}`;
// }

// const greetArrow = (user) => `Hi, ${user}`;

// // 3. Arrays
// const numbers = [1, 2, 3, 4, 5];

// // Map
// const doubled = numbers.map(num => num * 2);

// // Filter
// const even = numbers.filter(num => num % 2 === 0);

// // Reduce
// const sum = numbers.reduce((acc, curr) => acc + curr, 0);

// // 4. Objects
// const person = {
//     name: "Alice",
//     age: 22,
//     greet() {
//         console.log(`Hi, I'm ${this.name}`);
//     }
// };

// // 5. Loops
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// for (let num of numbers) {
//     console.log(num);
// }

// // 6. Closures
// function outer() {
//     let counter = 0;
//     return function inner() {
//         counter++;
//         return counter;
//     };
// }

// const increment = outer();

// // 7. Promises
// const asyncTask = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Task Done");
//         }, 1000);
//     });
// };

// // 8. Async/Await
// async function runTask() {
//     const result = await asyncTask();
//     console.log(result);
// }

// // 9. DOM (only works in browser)
// function changeText() {
//     const el = document.getElementById("demo");
//     if (el) el.innerText = "Changed!";
// }

// // 10. Debounce
// function debounce(fn, delay) {
//     let timer;
//     return function (...args) {
//         clearTimeout(timer);
//         timer = setTimeout(() => fn.apply(this, args), delay);
//     };
// }

// // 11. Throttle
// function throttle(fn, limit) {
//     let flag = true;
//     return function (...args) {
//         if (flag) {
//             fn.apply(this, args);
//             flag = false;
//             setTimeout(() => flag = true, limit);
//         }
//     };
// }

// // 12. Deep Clone
// function deepClone(obj) {
//     return JSON.parse(JSON.stringify(obj));
// }

// // 13. Currying
// function curry(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         };
//     };
// }

// // 14. Memoization
// function memoize(fn) {
//     const cache = {};
//     return function (x) {
//         if (cache[x]) return cache[x];
//         const result = fn(x);
//         cache[x] = result;
//         return result;
//     };
// }

// // 15. Fibonacci (Optimized)
// const fib = memoize(function (n) {
//     if (n <= 1) return n;
//     return fib(n - 1) + fib(n - 2);
// });

// // 16. Sorting
// const arr = [5, 3, 8, 1];
// arr.sort((a, b) => a - b);

// // 17. Event Loop Demo
// console.log("Start");

// setTimeout(() => console.log("Timeout"), 0);

// Promise.resolve().then(() => console.log("Promise"));

// console.log("End");

// // 18. Class
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     speak() {
//         console.log(`${this.name} makes noise`);
//     }
// }

// class Dog extends Animal {
//     speak() {
//         console.log(`${this.name} barks`);
//     }
// }

// const dog = new Dog("Tommy");
// dog.speak();

// // 19. Generator
// function* generatorFunc() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const gen = generatorFunc();

// // 20. Error Handling
// try {
//     throw new Error("Something went wrong");
// } catch (e) {
//     console.log(e.message);
// }