// A square of squares

// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!
// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:
// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

//NOTE: I solved this problem twice once after I figured out an easier way
//First we need to figure out what a square number is. A square number is any number that can be square rooted and equal a whole number.
//Knowing this and knowing that our answer needs to be a boolean of true:false helps us out a lot in solving this
//now we need to figure out how to set the problem up
//First attempt
//I decided to take the square root of the number 'n' and subtract it from  the square root of the number 'n' floored
//The floored method takes any number  or decimal and rounds it down. For this problem the square root of the number subtract the square root of the same number floored if it equals zero then that means it is a whole number and it is prime. so it will return true

//Second Attempt
//I found a easier way to solve the same problem.
//I took the square root of the number and used the modular 1==0 which basically says if the square root of number 'n' is divisable by 1 and equals zero then it is a prime number
//#1
var isSquare = function (n) {
  if (Math.sqrt(n) - Math.floor(Math.sqrt(n)) == 0) {
    return true;
  } else return false;
};

//#2
var isSquare = function (n) {
  return Math.sqrt(n) % 1 == 0;
};
