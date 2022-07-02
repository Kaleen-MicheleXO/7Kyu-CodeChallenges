// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example
// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
doTest([10, 14, 2, 23, 19], 42);
doTest([-100, -29, -24, -19, 19], 0);
doTest([1, 2, 3, 4, 6, -1, 2], 10);
doTest([-10, -8, -16, -18, -19], -18);
// Input sequence contains minimum two elements and every element is an integer.

function largestPairSum(numbers) {
  let sortt = numbers.sort((a, b) => a - b);
  return sortt[sortt.length - 1] + sortt[sortt.length - 2];
}
