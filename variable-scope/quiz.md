# Variable Scope Quiz

1. In JavaScript, where is a variable's scope determined?
   The variable's scope is determined by where it is declared in the code
2. Explain the difference between **global scope** and **block scope**.
   Global scope refers to variables that are accessible through the entire program, whereas Block scope refers to variables that are only accessible within a specific block of code which are usually defined by curly braces {}
3. When JavaScript attempts to reference a variable that does not exist or is outside of its scope, what error is thrown?
   The error is ReferenceError

## Complete the following problems below having to do with variable scope

### Problem 1: Global vs Block Scope Basics

Predict the output of the following code:

    let message = "Global Scope";

    if (true) {
        let message = "Block Scope";
        console.log(message); // Output?
    }

    console.log(message); // Output?

1. What will `consolelog(message)` inside the `if` statement print?

2. What will `consolelog(message)` outside the `if` statement print?

Run your code and inspect the results. Fix your answers if necessary.

### Problem 2: Predict the Output

Consider the following code snippet:

    let humanSound = "Hello";
    let birdSound = "Chirp";

    function makeSounds(){
        let dogSound = "Bark";
        let catSound = "Meow";
        humanSound = "Hi";

        console.log(humanSound); // [1]
        console.log(dogSound); // [2]
        console.log(catSound);
    }

    console.log(birdSound); // [3]
    makeSounds();
    console.log(humanSound); // [4]
    console.log(dogSound); // [5]

Without actually running this code yet, type below what you think will be logged to the console for each of the 5 labels above:

1. What will the `console.log` at [1] print?

2. What will the `console.log` at [2] print?

3. What will the `console.log` at [3] print?

4. What will the `console.log` at [4] print?

5. What will the `console.log` at [5] print?

After answering the questions above, copy and run the code in the `example` directory and take note of the output. Which ones (if any) did you get wrong?

### Problem 3: Real-World Scenario

When variables have different scopes, they can actually share the same variable names!

Consider the following code snippet:

    let name = "Alice";

    if (true) {
        let name = "Bob";
        if (true) {
            let name = "Charlie";
            console.log(name); // [1]
        }
        console.log(name); // [2]
    }

    console.log(name); // [3]

1. What will the `console.log` at [1] print?

2. What will the `console.log` at [2] print?

3. What will the `console.log` at [3] print?

After answering the questions above, copy and run the code in the `example` directory and take note of the output.

> **Note:** Although it's technically _possible_ to name your variables like this, it's certainly not recommended. This code was written this way for the purpose of the exercise, but always try to avoid using the same variable names in your actual programs.

## Tips:

1. How to write `Code Examples` in markdown

**for JS**:

```javascript
let data = "Howdy";
```

**for HTML**:

```html
<div>
    <p>This is text content</p>
</div>
```

**for CSS**:

```css
div {
    width: 100%;
}
```
