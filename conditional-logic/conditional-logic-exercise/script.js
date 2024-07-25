// Conditional Logic Exercises here
let age = 28; // this is my real age unfortunately
let isAdult; // this shit has no value
if (age < 18) {
    isAdult = false;
} else {
    isAdult = true;
}
console.log(isAdult);
let score = 88;
let grade = null;
if (score < 60) {
    grade = "F";
} else if (score < 70) {
    grade = "D";
} else if (score < 80) {
    grade = "C";
} else if (score < 90) {
    grade = "B";
} else if (score < 100) {
    grade = "A";
} else {
    grade = "A++";
}
console.log(score + ":" + grade);

let currentSeason = prompt("What season is it currently?");

if (currentSeason == "summer") {
    console.log("It's hot today.");
} else if (currentSeason == "spring") {
    console.log("The flowers are blooming.");
} else if (currentSeason == "fall") {
    console.log("The leaves are changing colors.");
} else if (currentSeason == "winter") {
    console.log("It's cold today.");
} else {
    console.log("Please enter a valid season next time.");
}

let dayOfTheWeek = prompt("What day of the week is it?");

if (dayOfTheWeek == "saturday" || dayOfTheWeek == "sunday") {
    console.log("Have a good weekend!");
} else {
    console.log("It's a weekday!");
}
