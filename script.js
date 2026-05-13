// 1. Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));
// 3. Debounce function
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}