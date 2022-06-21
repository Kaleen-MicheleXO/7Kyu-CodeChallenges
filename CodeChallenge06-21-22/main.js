// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
// longest("aretheyhere", "yestheyarehere") => "aehrsty")
// longest("loopingisfunbutdangerous", "lessdangerousthancoding") =>"abcdefghilnoprstu")
// longest("inmanylanguages", "theresapairoffunctions") => "acefghilmnoprstuy")

function longest(s1, s2) {
  let str = s1.concat(s2);
  let arr = [];
  for (let i = 0; i <= str.length; i++) {
    if (!arr.includes(str[i])) {
      arr.push(str[i]);
    }
  }
  return arr.sort().join("");
}
