// 1. Sum of two numbers
let a = 10, b = 20;
console.log("1) Sum =", a + b);

// 2. Print "Hello <name>"
let name = "Yash";
console.log("2) Hello " + name);

// 3. Even/Odd check
let num = 7;
console.log("3) " + (num % 2 === 0 ? "Even" : "Odd"));

// 4. Celsius → Fahrenheit
let c = 32;
let f = (c * 9/5) + 32;
console.log("4) Fahrenheit =", f);

// 5. Max among 3 numbers
let x = 10, y = 25, z = 15;
console.log("5) Max =", Math.max(x, y, z));

// 6. Find string length
let str = "JavaScript";
console.log("6) Length =", str.length);

// 7. Toggle boolean
let flag = true;
flag = !flag;
console.log("7) Toggle Boolean =", flag);

// 8. Concatenate strings
let s1 = "Hello ", s2 = "World";
console.log("8) Concatenation =", s1 + s2);

// 9. Positive/Negative/Zero
let n = -5;
if(n > 0) console.log("9) Positive");
else if(n < 0) console.log("9) Negative");
else console.log("9) Zero");

// 10. var / let / const example
var a1 = 10;   // re-declare & change
let b1 = 20;   // cannot re-declare, can change
const c1 = 30; // cannot change
console.log("10) var/let/const =", a1, b1, c1);

// 11. Multiplication table of 5
let t = 5;
console.log("11) Table of 5");
for(let i = 1; i <= 10; i++) {
  console.log(t + " x " + i + " = " + (t * i));
}

// 12. Sum of first 10 natural numbers
let sum = 0;
for(let i = 1; i <= 10; i++) sum += i;
console.log("12) Sum of first 10 numbers =", sum);

// 13. Switch-case → day name
let day = 3;
console.log("13) Day =", 
  day === 1 ? "Monday" :
  day === 2 ? "Tuesday" :
  day === 3 ? "Wednesday" : 
  day === 4 ? "Thursday" :
  day === 5 ? "Friday" :
  day === 6 ? "Saturday" :
  day === 7 ? "Sunday" : "Invalid Day"
);

// 14. Function → Factorial
function factorial(n) {
  let fact = 1;
  for(let i = 1; i <= n; i++) fact *= i;
  return fact;
}
console.log("14) Factorial of 5 =", factorial(5));

// 15. Function → Voting eligibility
function canVote(age) {
  return age >= 18 ? "Eligible to vote" : "Not eligible to vote";
}
console.log("15) Voting:", canVote(21));

/********* 16. Prime Number Check *********/
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log("16) Prime Check (17):", isPrime(17));

/********* 17. Sum of digits *********/
let number = 123;
let temp = number, digitSum = 0;
while (temp > 0) {
  digitSum += temp % 10;
  temp = Math.floor(temp / 10);
}
console.log("17) Sum of digits (123):", digitSum);

/********* 18. Reverse String without reverse() *********/
function revString(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) rev += str[i];
  return rev;
}
console.log("18) Reverse String:", revString("hello"));

/********* 19. Grade using Marks *********/
let marks = 82;
if (marks >= 90) console.log("19) Grade: A");
else if (marks >= 75) console.log("19) Grade: B");
else if (marks >= 50) console.log("19) Grade: C");
else console.log("19) Grade: Fail");

/********* 20. Simple Calculator *********/
function calc(a, b, op) {
  if (op === "+") return a + b;
  else if (op === "-") return a - b;
  else if (op === "*") return a * b;
  else if (op === "/") return b !== 0 ? a / b : "Cannot divide by zero";
  else return "Invalid operator";
}
console.log("20) Calc (10 * 3):", calc(10, 3, "*"));

/********* 21. Count Vowels in String *********/
function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let ch of str) if (vowels.includes(ch)) count++;
  return count;
}
console.log("21) Vowels in 'education':", countVowels("education"));

/********* 22. Fibonacci Series upto n *********/
let N = 8, A = 0, B = 1;
console.log("22) Fibonacci:");
for (let i = 1; i <= N; i++) {
  console.log(A);
  let next = A + B;
  A = B;
  B = next;
}

/********* 23. Function → Min & Max of array *********/
function minMax(arr) {
  return { min: Math.min(...arr), max: Math.max(...arr) };
}
console.log("23) Min & Max:", minMax([4, 9, 1, 6, 2]));

/********* 24. Switch Case Menu *********/
let choice = 3, num1 = 10, num2 = 5;
console.log("24) Menu Result:");
switch (choice) {
  case 1: console.log(num1 + num2); break;
  case 2: console.log(num1 - num2); break;
  case 3: console.log(num1 * num2); break;
  case 4: console.log(num1 / num2); break;
  default: console.log("Invalid Choice");
}

/********* 25. Armstrong Number *********/
function isArmstrong(num) {
  let sum = 0, temp = num;
  let digits = num.toString().length;
  while (temp > 0) {
    let d = temp % 10;
    sum += d ** digits;
    temp = Math.floor(temp / 10);
  }
  return sum === num;
}
console.log("25) Armstrong Check (153):", isArmstrong(153));
