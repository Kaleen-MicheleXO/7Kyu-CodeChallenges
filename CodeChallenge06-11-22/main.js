// Example
// In this example, the consonants f, b and r are modified. The vowels o and a are left untouched.
// 'foo bar' => 'fofoo bobaror' (`fof-o-o bob-a-ror`)
// Note: The dashes - in the example are added for readability and should not be included in the output.
// The Assignment
// Your task is to implement a function function robberEncode(sentence) which takes in a string sentence and returns the result, converted into robber language, as a string.

// Notes
// Only consonants should be modified; leave all other characters unchanged.
// Both upper and lower case characters will be tested.
// The case of the o character and the neighboring consonants should match (F => FOF and f => fof).
// For the purpose of this kata, a character is considered a consonant if it's equal to one of the letters BCDFGHJKLMNPQRSTVWXYZ.

function robberEncode(sentence) {
  //P: a string  with upper and lower case letters
  //R: return the string with  every consonant repeated with an 'o' between it
  //E:
  //robberEncode("hello world"), "hohelollolo wowororloldod");
  // robberEncode("coding is fun"),="cocododinongog isos fofunon");
  // robberEncode("follow the white rabbit"), "fofolollolowow tothohe wowhohitote rorabobbobitot");
  // a(robberEncode("S.O.S"), "SOS.O.SOS");

  //P: 1st: write an array  with all of the consonats  in lower and one with cap letters.
  //2nd:loop throught the string,
  //3rd: if your array includes sentence[i]=> push it to new array with an added 'o'
  // i=0 i<=sen.length-1 if vowels.includes(sentance[i]).=> answer.push(sen[i])

  let answer = [];
  (CapC = [
    "B",
    "C",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "M",
    "N",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ]),
    (LowC = [
      "b",
      "c",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "m",
      "n",
      "p",
      "q",
      "r",
      "s",
      "t",
      "v",
      "w",
      "x",
      "y",
      "z",
    ]);
  for (let i = 0; i <= sentence.length - 1; i++) {
    if (CapC.includes(sentence[i])) {
      answer.push(sentence[i].concat("O") + sentence[i]);
    } else if (LowC.includes(sentence[i])) {
      answer.push(sentence[i].concat("o") + sentence[i]);
    } else answer.push(sentence[i]);
  }
  return answer.join("");
}

function robberEncode(sentence) {
  let answer = [];
  Con = "BCDFGHJKLMNPQRSTVWXYZ";

  for (let i = 0; i <= sentence.length - 1; i++) {
    if (Con.includes(sentence[i])) {
      answer.push(sentence[i].concat("O") + sentence[i]);
    } else if (Con.toLowerCase().includes(sentence[i])) {
      answer.push(sentence[i].concat("o") + sentence[i]);
    } else answer.push(sentence[i]);
  }
  return answer.join("");
}
