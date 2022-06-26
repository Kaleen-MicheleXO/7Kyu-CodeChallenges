// We want to know the index of the vowels in a given word, for example, there are two vowels in the word super (the second and fourth letters).
// So given a string "super", we should return a list of [2, 4].

// Some examples:
// Mmmm  => []
// Super => [2,4]
// Apple => [1,5]
// YoMama -> [1,2,4,6]
// vowelIndices("mmm"), []
// vowelIndices("apple"), [1,5]
// vowelIndices("super"), [2,4]
// vowelIndices("orange"), [1,3,6]
// vowelIndices("supercalifragilisticexpialidocious"), [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33]

// NOTES
// Vowels in this context refers to: a e i o u y (including upper case)
// This is indexed from [1..n] (not zero indexed!)

function vowelIndices(word) {
  let vowels = ["a", "e", "i", "o", "u", "y"];
  let w = word.toLowerCase().split("");
  let arr = [];

  for (let i = 0; i <= w.length - 1; i++) {
    if (vowels.includes(w[i])) {
      arr.push(i + 1);
    }
  }

  return arr;
}
