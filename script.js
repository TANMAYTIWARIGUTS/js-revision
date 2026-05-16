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