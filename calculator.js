function calculate(expression) {
    // Remove whitespaces
    expression = expression.replace(/\s/g, '');
    // Remove double quotes
    expression = expression.replace(/"/g, '');
    
    let stack = []
    //push all the elements to a stack
    for(const element of expression) {
        let char = element
        stack.push(char)
    }
    
    console.log(stack)
    
    // Helper function to check if a value is a number
    const isNumber = (value) => !isNaN(parseFloat(value)) && isFinite(value);
    
    // Iterate through the stack in reverse order
    for (let i = stack.length - 1; i >= 0; i--) {
        // If the current element is an operator
        if (['+', '-', '*', '/'].includes(stack[i])) {
            // Extract the two operands and the operator
            const operand1 = stack[i + 1];
            const operand2 = stack[i + 2];
            const operator = stack[i];

            console.log(operand1, operand2)

            // Check if both operands are numbers
            if (isNumber(operand1) && isNumber(operand2)) {
                // Perform the operation and replace the operands and operator with the result
                switch (operator) {
                    case '+':
                    stack.splice(i, 3, String(parseFloat(operand1) + parseFloat(operand2)));
                    break;
                    case '-':
                    stack.splice(i, 3, String(parseFloat(operand1) - parseFloat(operand2)));
                    break;
                    case '*':
                    stack.splice(i, 3, String(parseFloat(operand1) * parseFloat(operand2)));
                    break;
                    case '/':
                    stack.splice(i, 3, String(parseFloat(operand1) / parseFloat(operand2)));
                    break;
                }
                
            } else {
                // If operands are not numbers, you may want to handle this case accordingly
                console.error('Invalid operands for operator:', operator);
            }
        }
    }

    // The final result will be at the top of the stack
    return stack[0];
    
 }
  // Test cases
console.log(calculate("+ 3 4"));                     // Output: 7
console.log(calculate("- 3 * 4 5"));                  // Output: -17
console.log(calculate("* + 3 4 5"));                  // Output: 35
console.log(calculate("/ - 3 4 + 5 2")); 
