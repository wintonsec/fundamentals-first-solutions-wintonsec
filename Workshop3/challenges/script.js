// Challenge 1: Add fruits
// Write a program that prompts the user 5 times to enter a fruit
// For each of these fruit, add them to the empty "fruits" array
// Use a for loop to accomplish this.
// let fruits = [];
// // Code goes Here
// // for (let i = 0; i < 5; i++) {
// //     let fruit = prompt("Enter a fruit:");
// //     fruits.push(fruit);
// // }
// // console.log(fruits);

// // Challenge 2: Find Sum
// // Write a loop that finds the sum of the numbers array below
// // Log your final sum to the console
// // let numbers = [2, 7, 2, 7, 8, 1, 9];

// // let numbers = [2, 7, 2, 7, 8, 1, 9];
// // let sum = 0;
// // for (let i = 0; i < numbers.length; i++) {
// //     let currentNumber = numbers[i];
// //     sum += numbers[i];
// // }
// // console.log("Sum of numbers:", sum);
// // console.log(sum);

// // Practice: Shift to Front
// // Given the array below, move the last 3 elements from the end of the array to the front
// // Use the splice() and concat() Array Methods to do so.
// let letters = ["D", "E", "F", "G", "A", "B", "C"];

// let spliced = letters.splice(-3);
// letters = spliced.concat(letters);
// console.log(letters);

// // Practice: Print array Backwards
// // Given the array below, log each of the elements in REVERSE order
// // This requires you to iterate backwards over the array's indexes
// let jNames = [
//     "Jeff",
//     "John",
//     "Jerry",
//     "Jenson",
//     "Jerome",
//     "Jordan",
//     "Jackson",
//     "Jared",
// ];

// for (let i = jNames.length - 1; i >= 0; i--) {
//     console.log(jNames[i]);
// }

// Practice: High, Medium, and Low Numbers
// Write a for loop that loops over every twentieth number from 1400 to 1600, inclusive.
// For each number, log a message to the console that indicates whether the number is
// high, medium, or low. (Example: 1440 - low)
// Numbers greater than 1500 are high, numbers below 1500 are low,
// and 1500 exactly is medium.

for (let i = 1400; i <= 1600; i += 20) {
    if (i > 1500) {
        console.log(i + " - high");
    } else if (i < 1500) {
        console.log(i + " - low");
    } else {
        console.log(i + " - medium");
    }
}
