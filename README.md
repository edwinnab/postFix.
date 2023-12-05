given the readme 
# Alternative calculator assignment
## Description
We'd like you to write a calculator to perform basic arithmetic, but use an alternative syntax for writing the expressions.
In this alternative notation, the operators precede the operands. For example, while in traditional notation we might write `3 + 4`, instead we would write `+ 3 4`.
The main advantage of this format is that it does not require parentheses for any ambiguous expression.
| Traditional notation  | Alternative notation |
| ---------------- | --------------- |
| 3 + 4                 | + 3 4      |
| 3 - (4 * 5)         | - 3 * 4 5    |
| (3 + 4) * 5        | * + 3 4 5    |
| (3 - 4) / (5 + 2)  | / - 3 4 + 5 2  |
In the code provided, the `app/calculator.js` file exports a `calculate` function. This function is expected to take an alternative expression as a string and output the numerical solution.
We have included some tests to check this function works as expected.
Please implement the `calculate` function to solve expressions in the alternative format as expected.
Given the starter code :
exports.calculate = function (expression) {
     return 0
 }
I have that question I have been trying to solve maybe anyone could help out,
the function should take a normal string expression perform the calculation using the alternative way and output a numeric answer
