// Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.
// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.
//We know we will have to round our number up. Math.ceil() and we want it to return multiples of 5
//If we divide the input number/5 and round up that will give us how many times that number can go into 5 roughly.
//we can then times that number by 5 to get our multiple

function roundToNext5(n) {
  return Math.ceil(n / 5) * 5;
}
