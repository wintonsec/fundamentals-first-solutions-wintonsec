# Conditional Logic Quiz

1. What is a "conditional statement" used for in JavaScript?
   to perform different actions based on different conditions; it allows to execute specific code blocks depending on whether a condition evaluates to "true" or "false"
2. What 2 parts are an `if` statement made up of? List and describe both.
   the condition: an expression that evaluates to a boolean value (true or false); it's placed within parentheses after "'if"
   the code block; the code to be executed if the condition is true which is enclosed in curly braces {}
3. What is the purpose of an `else` clause in an `if` statement?
   'else' is to specify a block of code to be executed if the condition in the 'if' statement is false!!!
   it's a catch-all rule or default action when none of the preceding conditions hold true
4. Which built-in function should we use to get input from the user?
   we should use the prompt() function which displays a dialog box that prmopts the user to input something
5. Which operator is the logical `and` operator and what purpose does it serve?
   the logical 'and' operator is &&, which serves two purposes
6. combinnig two boolean expressions
7. returning true only if both expressions are true

-   if either expression is false, then it will return a false result

6. Which operator is the logical `or` operator and what purpose does it serve?
   OR is || (two pipes... hehe)
   it serves to combine two boolean expressions and returns true if at least one of the expressions is true
   it returns false only if both expressions are false

#### Truth Table Exercise

Fill in the missing values in this truth table by typing the expected boolean value to the corresponding number below:

> **Note:** Operations in parentheses have priority, so they should be evaluated first, and then the final result should come from combining the inner results.

| p       | q       | !p      | p OR q | p AND q | (!p) OR (p AND q) |
| ------- | ------- | ------- | ------ | ------- | ----------------- |
| `true`  | `true`  | **1**   | `true` | `true`  | **5**             |
| `true`  | `false` | `false` | **2**  | `false` | **6**             |
| `false` | `true`  | `true`  | `true` | **4**   | **7**             |
| `false` | `false` | `true`  | **3**  | `false` | **8**             |

Fill in the boolean values below.

1. When `p = true` and `q = true`, `!p` should be:
   false
2. When `p = true` and `q = false`, `p OR q` should be:
   true
3. When `p = false` and `q = false`, `p OR q` should be:
   false
4. When `p = false` and `q = true`, `p AND q` should be:
   false
5. When `p = true` and `q = true`, `(!p) OR (p AND q)` should be:
   true
6. When `p = true` and `q = false`, `(!p) OR (p AND q)` should be:
   false
7. When `p = false` and `q = true`, `(!p) OR (p AND q)` should be:
   true
8. When `p = false` and `q = false`, `(!p) OR (p AND q)` should be:
   true

// !p inverts the value of p (ex. p = true, so !p = false)
// p OR q = true only if p or q is true. (ex. p = true; q = false; p OR q = true)
// p AND q = true only if both p and q are true (ex. p is false, so p AND q is false)
// if p = true and q = true, (!p) OR (p AND q) should be:
/// !p is false (since p is true), p AND q is true (since both p and q are true)

// if p = true and q = false, (!p) OR (p AND q) should be:
/// !p is false since p = true, p AND q is false since q = false, !p OR p AND q is false since both !p and p AND q are false

//if p = false and q = true, (!p) OR (p AND q) should be:
/// !p is true since p = false, p AND q is false since p = false, and !p OR p AND q is true since !p is true

//if p = false and q = false, (!p) OR (p AND q) should be:
/// !p is true since p = false, p AND q is false since p and q are both false
