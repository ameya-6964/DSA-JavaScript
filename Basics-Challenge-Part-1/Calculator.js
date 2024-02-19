/**
 * Returns the result of a calculation.
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @param {string} operator - The operator to use in the calculation.
 * @returns {number} - The result of the calculation.
  function calculator(num1: number, num2: number, operator: string): number;
 */

function calculator(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  }
  if (operator === "-") {
    if (num2 > num1) return num2 - num1;
    return num1 - num2;
  }
  if (operator === "*") {
    return num1 * num2;
  }
  if (operator === "/") {
    return num1 / num2;
  } else {
    return new Error("Invalid Operator");
  }
}

const result = calculator(1, 2, "/");
console.log(result);
