// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
// solution('abcde', 'cde'), true)
// solution('abcde', 'abc'), false)

function solution(str, ending) {
  if (ending === "") {
    return true;
  } else return str.slice(-ending.length) === ending ? true : false;
}
///or////////////////////
function solution(str, ending) {
  return str.slice(-ending.length) === ending || ending === "" ? true : false;
}
