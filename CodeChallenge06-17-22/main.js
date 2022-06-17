// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)
// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)
// "Dermatoglyphics"), --> true
//   isIsogram("isogram"),-->  true
//   isIsogram("aba"), --> false, "same chars may not be adjacent"
//   isIsogram("moOse"),-->  false, "same chars may not be same case"
//   isIsogram("isIsogram"), --> false
//   isIsogram(""),-->  true, "an empty string is a valid isogram"

function isIsogram(str) {
  let low = str.toLowerCase();
  let answer = [];

  for (let i = 0; i <= low.length - 1; i++) {
    if (!answer.includes(low[i])) {
      answer.push(low[i]);
    } else {
      return false;
    }
  }
  return true;
}
