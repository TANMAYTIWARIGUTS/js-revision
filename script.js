function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello"));

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

console.log(isPalindrome("madam"));

function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

const arr = [1, 2, 2, 3, 4, 4];

const unique = [...new Set(arr)];

console.log(unique);