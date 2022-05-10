// Task

// Write a method remainder which takes two integer arguments, dividend and divisor, and returns the remainder when dividend is divided by divisor. Do NOT use the modulus operator (%) to calculate the remainder!

// Assumption
// Dividend will always be greater than or equal to divisor.

//Examples
remainder(3, 2), 1;
remainder(19, 2), 1;
remainder(10, 2), 0;
remainder(34, 7), 6;
remainder(27, 5), 2;
remainder(27, 5), 2;

// Notes
// Make sure that the implemented remainder function works exactly the same as the Modulus operator (%).

// we need to hard code the modulus operator-first we need to know what the modular operator does. it finds the remainder between two numbers

//Note I solves this twice
function remainder(D, d) {
  let div = Math.floor(D / d);
  return Math.abs(div * d - D);
}

const remainder = (D, d) => D - Math.floor(D / d) * d;
