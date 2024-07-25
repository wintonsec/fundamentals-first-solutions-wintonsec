// Functions Exercise here

function addAndMultiplyBy5(num1, num2) {
    return (num1 + num2) * 5;
}
console.log("addAndMultiplyBy5(10, 5):", addAndMultiplyBy5(10, 5));
console.log("addAndMultiplyBy5(3, 7):", addAndMultiplyBy5(3, 7));

function hoursToMinutes(hours) {
    return hours * 60;
}
console.log("hoursToMinutes(2):", hoursToMinutes(2));
console.log("hoursToMinutes(3.5):", hoursToMinutes(3.5));

function getGreeting(name) {
    return "Hello " + name + "!";
}
console.log("getGreeting('Donald'):", getGreeting("Donald"));
console.log("getGreeting('Kamala'):", getGreeting("Kamala"));

function giveMeBiggest(num1, num2) {
    return Math.max(num1, num2);
}
console.log("giveMeBiggest(100, 999):", giveMeBiggest(100, 999));
console.log("giveMeBiggest(50, 25):", giveMeBiggest(50, 25));

function getLast(arr) {
    return arr[arr.length - 1];
}
console.log("getLast([67, 7, 1, 5]):", getLast([67, 7, 1, 5]));
console.log("getLast(['a', 'b', 'c']):", getLast(["a", "b", "c"]));

function multiplyAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        product *= arr[i];
    }
    return product;
}
console.log("multiplyAll([1, 2, 3, 4]):", multiplyAll([1, 2, 3, 4]));
console.log("multiplyAll([2, 3, 4, 5]):", multiplyAll([2, 3, 4, 5]));

function getLargest(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log(
    "getLargest([7, 2, 7, 9, 3, 8, 12]):",
    getLargest([7, 2, 7, 9, 3, 8, 12])
);
console.log("getLargest([1, 5, 3, 9, 2]):", getLargest([1, 5, 3, 9, 2]));

function addTwoNumbers(num1, num2) {
    let result = num1 + num2;
    return result;
}
// Example Calls
let addTwoNumbersResult1 = addTwoNumbers(2, 2);
console.log("AddTwoNumbers Exercise:", addTwoNumbersResult1);

let addTwoNumbersResult2 = addTwoNumbers(1, 4);
console.log("AddTwoNumbers Exercise:", addTwoNumbersResult2);

// Rest of Exercises Here:
