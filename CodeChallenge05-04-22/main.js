// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples

// [1, 1, 2] ==> 2
// / [17, 17, 3, 17, 17, 17, 17] ==> 3

//We know we have a list of  numbers in a array, all of them are the same besides one number and we need to get that number out
//in order to find that number we can use the sort method to order the numberd from smallest to greatest
//After our numbers are ordered we now know our one odd number will either be at the begining or end and we need to figure out where it is
//In order to figure out where it is we can create a conditional or ternary i went with conditional
//We know that if the first and second number are the same then the last number must be the different number so we can test if  arrsort[0] === arrsort[1] then we will return the last number arrsort[arrsort.length - 1] else its the first number

function stray(numbers) {
  let arrsort = numbers.sort((a, b) => a - b);
  if (arrsort[0] === arrsort[1]) {
    return arrsort[arrsort.length - 1];
  }
  return arrsort[0];
}
