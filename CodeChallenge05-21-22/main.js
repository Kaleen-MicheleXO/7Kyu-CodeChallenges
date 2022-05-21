// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)
// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5

//Edge Cases
arithmetic(1, 2, "add"),
  3,
  arithmetic(8, 2, "subtract"),
  6,
  arithmetic(5, 2, "multiply"),
  10,
  arithmetic(8, 2, "divide"),
  4,
  ///////////////////////////////////////////////////////////////

  //I solved this twice as I found an alternative that was cleaner
  //For the first one  I used an if statement  and if the operator=== 'string'  I returned the math for the operation
  //For the second one  I created a object  with all the operator names that could be taken in. Then I set them to a math equation and returned it
  function arithmetic(a, b, operator) {
    if (operator == "add") {
      return a + b;
    }
    if (operator == "subtract") {
      return a - b;
    }
    if (operator == "multiply") {
      return a * b;
    }
    if (operator == "divide") {
      return a / b;
    }
  };

///////////////////////////////////////////////////////////////////
function arithmetic(a, b, operator) {
  let operators = {
    add: a + b,
    subtract: a - b,
    multiply: a * b,
    divide: a / b,
  };
  return operators[operator];
}
