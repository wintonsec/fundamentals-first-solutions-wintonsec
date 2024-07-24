// Demo: Splice and Concat
// Remove the 3rd element of the array and move it to the front of the array
// let arr = ["Apples", "Bananas", "Grapes", "Oranges"];
// let spliced = arr.splice(2, 1);
// arr = spliced.concat(arr);

// console.log(arr);

// // Demo: Blastoff!
// // Create a loop that simulates a countdown for a rocket.
// // Count down from 10 to 1, and then print "Blast off!"
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("Blast off!");

// // Demo: Loops with Conditionals
// // Loop over the following array and print a message indicating whether each number
// // is even or odd.
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        // numbers[i] is even
        console.log(numbers[i] " - even");
    } else {
        // numbers[i] is odd
        console.log(numbers[i] + " - odd");
    }
    }
}