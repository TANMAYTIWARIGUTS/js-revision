// 1. Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Tanmay"));

// 2. Check even or odd
function checkNumber(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

console.log(checkNumber(7));
// 3. Find largest number in array
function largest(arr) {
  return Math.max(...arr);
}

console.log(largest([3, 9, 1, 15, 7]));