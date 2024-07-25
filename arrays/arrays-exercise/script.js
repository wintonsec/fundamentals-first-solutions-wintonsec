// Arrays Exercise here
let languages = ["HTML", "CSS", "JavaScript", "React", "Node", "SQL"];

console.log(languages);

// declaring firstElement and logging it
let firstElement = languages[0];
console.log("The first element of the array is", firstElement);

// declaring thirdElement and logging it
let thirdElement = languages[2];
console.log("The third element of the array is", thirdElement);

// declaring length and logging it
let length = languages.length;
console.log("The length of the array is", length);

// declaring the lastElement and logging it
let lastElement = languages[length - 1];
console.log("The last element of the array is", lastElement);

// reassigning the foruth element and logging the final array
languages[3] = "Angular";
console.log("Final languages array:", languages);

// declaring names array
let names = ["Luke", "Leia", "Han", "Ron"];
console.log("Initial names array:", names);

// removing "Ron" from the end and assigning to popped
let popped = names.pop();
console.log("Popped:", popped);

// adding Chewbacca, Anakin, and Jar Jar
names.push("Chewbacca");
names.push("Anakin");
names.push("Jar Jar");

// replacing Anakin with Darth Vader
let anakinIndex = names.indexOf("Anakin");
if (anakinIndex == -1) {
    names[anakinIndex] = "Darth Vader";
}

// logging the final names array
console.log("Final names array:", names);
