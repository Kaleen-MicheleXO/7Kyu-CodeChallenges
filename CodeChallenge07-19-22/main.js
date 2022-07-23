// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""
// // "What was the name of your first pet?""Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"
// maskify('4556364607935616'), '############5616'
// maskify('1'), '1'
// maskify('11111'), '#1111'

// return masked string
function maskify(cc) {
  let strlength = cc.length - 4;
  if (cc.length <= 4) {
    return cc;
  } else {
    return `${"#".repeat(strlength)}${cc.slice(cc.length - 4)}`;
  }

  //or
}
// return masked string
function maskify(cc) {
  return cc.length <= 4 ? cc : `${"#".repeat(cc.length - 4)}${cc.slice(-4)}`;
}
