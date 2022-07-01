// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

//Examples
isSortedAndHow([1, 2]), "yes, ascending";
isSortedAndHow([15, 7, 3, -8]), "yes, descending";
isSortedAndHow([4, 2, 30]), "no";

function isSortedAndHow(array) {
  return array.every((x, i) => i == 0 || array[i] >= array[i - 1])
    ? "yes, ascending"
    : array.every((x, i) => i == 0 || array[i] <= array[i - 1])
    ? "yes, descending"
    : "no";
}

//The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value
//the condition on the left is just an edge case to avoid an error when using arr[i-1]
