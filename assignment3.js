// ⭐ Task 1: Student Marks - Average using reduce()
let marks = [80, 90, 70, 85, 95];
let avg = marks.reduce((sum, m) => sum + m, 0) / marks.length;
console.log("Average Marks:", avg);


// ⭐ Task 2: Filter Even Number
let numbers = [1,2,3,4,5,6,7,8,9];
let evens = numbers.filter(n => n % 2 === 0);
console.log("Even Numbers:", evens);


// ⭐ Task 3: Shopping Cart - Total Bill
let cart = {
  item: "Laptop",
  price: 45000,
  quantity: 2
};
let total = cart.price * cart.quantity;
console.log("Total Bill:", total);


// ⭐ Task 4: Movie List
let movies = ["Inception", "Avatar", "KGF"];

// Add one movie
movies.push("Interstellar");

// Remove last movie
movies.pop();

// Print final list
console.log("Final Movie List:");
for (let movie of movies) {
  console.log(movie);
}


// ⭐ Task 5: User Profile JSON
let user = {name: "Aman", age: 21, course: "JS"};

// Convert to JSON
let jsonData = JSON.stringify(user);

// Convert back to object
let objData = JSON.parse(jsonData);

console.log("JSON Data:", jsonData);
console.log("Back to Object:", objData);


// ⭐ Bonus Task 6: Find Max Number (without built-in max)
let arr = [10, 40, 25, 80, 15];
let max = arr[0];

for (let num of arr) {
  if (num > max) {
    max = num;
  }
}
console.log("Max Number:", max);


// ⭐ Bonus Task 7: Transform Names to Uppercase using map()
let names = ["ram", "shyam", "mohan"];
let upperNames = names.map(n => n.toUpperCase());
console.log("Uppercase Names:", upperNames);
