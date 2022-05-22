// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.
// For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).



//Examples
factorial(0), 1, "factorial for 0 is 1
factorial(1), 1, "factorial for 1 is 1
factorial(2), 2, "factorial for 2 is 2
factorial(3), 6, "factorial for 3 is 6

// Note:The throw statement throws a user-defined exception. Execution of the current function will stop (the statements after throw won't be executed), and control will be passed to the first catch block in the call stack. If no catch block exists among caller functions, the program will terminate.



function factorial(n) {
  let answer = 1;
  if (n == 0) {
    return 1;
  } else if (n < 0 || n > 12) {
    throw "RangeError";
  } else {
    for (let i = 1; i <= n; i++) {
      answer *= i;
    }
    return answer;
  }
}
