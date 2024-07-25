// Objects Exercise here

// declare an object person nad assign to it an object literal with the following 3 properties:
// firstName, lastName, hobby
// assign each of these properties with appropriate string values.

const person = {
    firstName: "Wintonious",
    lastName: "Uncodangerous",
    hobby: "yikin",
};

// now, log 'person' to the console with the label: "Initial person:" and check your DevConsole
// to see the output
console.log("Initial person:", person);

// using DOT NOTATION, log the PERSON object's firstName and lastName property to the console with the label: "This person's name is"
// using BRACKET NOTATION, log the person object's HOBBY property to the console with the label:
// "This person's hobby is"

console.log("This person's name is", person.firstName, person.lastName);
console.log("This person's hobby is", person["hobby"]);

// using DOT NOTATION, add a new property called "job" and assign it to the string "Software Engineer"
// remember, this process has the same syntax as updating a property

person.job = "Cybersecurity Engineer";

// recall that brakcet notation uses a STRING value to access or update properties
// this means that we can utilize a variable that contains a string value with bracket notation, as well
// declare a variable propName and assign to it the string "previousJob"

const propName = "previousJob";

// using BRACKET NOTATION and the variable we just declared, update person's previouJob property so that it contains an appropriate string value

person[propName] = "Personal Trainer";

// using either dot notation or bracket notation, log the person's previousJob property to the console with the label: "This person's previous job was"

console.log("This person's previous job was", person.previousJob);

// log the person object to the console with the label: "Final person:"

console.log("Final person:", person);

// declare shapes array with 3 object literals that represent a shape
// each object should have the properties: name, sides (ex. name: "square", sides: 4)
const shapes = [
    { name: "triangle", sides: 3 },
    { name: "square", sides: 4 },
    { name: "pentagon", sides: 5 },
];

// declare a variable circle and assign to it an object literal like the ones you just declared that represents a circle
const circle = { name: "circle", sides: 0 };
shapes.push(circle);

// using push, add the circle object to the end of your shapes array
shapes.push(circle);

// using a for loop, iterate over the shapes array and log a statement to the console for each shape object in this format:
// A (name of shape) has (number of sides) sides.
for (let i = 0; i < shapes.length; i++) {
    console.log("A " + shapes[i].name + " has " + shapes[i].sides + " sides.");
}

// log the shapes array to the console with the label: "Final shapes array"
console.log("Final shapes array:", shapes);

// Objects Exercise: Searching Arrays of Objects
// Return to where we left off with our shapes array. In this exercise,
// we will search our shapes array for a shape with the number of sides that the user chooses.

// At the bottom of our script.js file, add a prompt which asks the user to
// "Please enter a number of sides you want to search for: " and assign the result to a variable numSides.

const numSides = parseInt(
    prompt("Please enter a number of sides you want to search for: ")
);

// Note: Don't forget! Any response you get from the user will be a string value, but the number of sides you want to search for is a number value.

// Declare a variable foundShape and assign the value null to it.

let foundShape = null;

// Iterate over the shapes array, and for each shape, check if that shape's sides property matches the numSides response we got from the user.
// If there's a match, we should assign the current shape to the foundShape variable.

for (let i = 0; i < shapes.length; i++) {
    if (shapes[i].sides == numSides) {
        foundShape = shapes[i];
        break; // Exit the loop once the match is found
    }
}

// After the for loop ends, check if foundShape is still null. If it is, log to the console the message
//"No matching shape was found.". If it is NOT null, log to the console the message
// "We found a shape! It's the (name of shape).", replacing (name of shape) with the name property of the shape you found.

if (foundShape == null) {
    console.log("No matching shape was found.");
} else {
    console.log("We found a shape! It's the " + foundShape.name + ".");
}
