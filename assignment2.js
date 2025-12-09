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
