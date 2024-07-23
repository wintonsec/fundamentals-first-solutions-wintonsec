# Additional Topics

## Array.splice() and Array.concat()

There are many different Array methods that we have access to, and the point is not to memorize all of them. Ideally, we should be able to look up documentation on array methods when we want to use them.

`Array.splice()` is an array method we can use to remove elements in an array:

    let array = ["a", "b", "c", "d", "e"];
    let spliced = array.splice(0, 3);
    console.log(array); // ["d", "e"]
    console.log(spliced); // ["a", "b", "c"]

Or, replace elements in an array:

    let array = ["f", "g", "h", "i", "a"];
    let spliced = array.splice(4, 1, "j", "k");
    console.log(array); // ["f", "g", "h", "i", "j", "k"]
    console.log(spliced); // ["a"]

It's important to keep in mind that `Array.splice()` is a **mutating function**, meaning it affets the original array.

`Array.concat()` is an array method that combines two arrays together:

    let array1 = ["a", "b", "c"];
    let array2 = ["d", "e", "f"];
    let combined = array1.concat(array2);
    console.log(combined); // ["a", "b", "c", "d", "e", "f"]

`Array.concat()` is **not** a mutating function. It constructs a new array that contains the contents of the two combining arrays. For example:

    let array1 = ["a", "b", "c"];
    let array2 = ["d", "e", "f"];
    let combined = array1.concat(array2);
    console.log(combined); // ["a", "b", "c", "d", "e", "f"]

    console.log(array1); // ["a", "b", "c"]
    console.log(array2); // ["d", "e", "f"]

## Backwards For Loop

For loops are also able to loop backwards. By adjusting the initialization, condition, and iterating step, we can have a for loop count down from a certain number. This can be used for counting downwards or looping backwards through an array:

    let array = [1, 2, 3 , 4];
    for(let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }

The above example shows a simple example on how to loop backwards through an array.

## Loops with Conditionals

A common combination is using conditionals inside of loops. When we do this, we can do an "inspection" for each loop iteration and decide on different code for each iteration.

    for(let i = 0; i < 15; i++) {
        if(i % 2 === 0) {
            console.log("even");
        } else {
            console.log("odd");
        }
    }
