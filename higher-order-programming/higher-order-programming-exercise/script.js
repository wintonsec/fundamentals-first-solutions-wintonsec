// Higher Order Programming Exercise here

// Calculator Exercise:
// Pre-defined Functions
let addition = function (num1, num2) {
    return num1 + num2;
};

let subtraction = function (num1, num2) {
    return num1 - num2;
};

let multiplication = function (num1, num2) {
    return num1 * num2;
};

let division = function (num1, num2) {
    return num1 / num2;
};

// Define the calculator function here:

function calculator(num1, num2, operation) {
    return operation(num1, num2);
}

console.log(calculator(8, 8, addition));
console.log(calculator(8, 8, subtraction));
console.log(calculator(8, 8, division));

// Poor man's forEach Exercise

function forEach(array, func) {
    for (let i = 0; i < array.length; i++) {
        func(array[i]);
    }
}

let yellIt = function (str) {
    console.log(str.toUpperCase());
};

let words = ["hello", "world", "javascript", "forEach"];
forEach(words, yellIt);

// Print Each Song Title Exercise

let exampleSongs = [
    { id: 1, title: "Call Me Maybe", artist: "Carly Rae Jepsen", year: 2011 },
    { id: 2, title: "Shake It Off", artist: "Taylor Swift", year: 2014 },
    {
        id: 3,
        title: "Uptown Funk",
        artist: "Mark Ronson ft. Bruno Mars",
        year: 2014,
    },
    {
        id: 4,
        title: "Despacito",
        artist: "Luis Fonsi & Daddy Yankee ft. Justin Bieber",
        year: 2017,
    },
];

function printSongTitle(song) {
    console.log(song.title);
}

exampleSongs.forEach(printSongTitle);
