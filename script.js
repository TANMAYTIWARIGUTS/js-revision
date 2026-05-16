function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello"));

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

console.log(isPalindrome("madam"));