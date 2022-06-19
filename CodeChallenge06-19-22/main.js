// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
// If you want to know more: http://en.wikipedia.org/wiki/DNA
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)
// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"
// DNAStrand("AAAA"),"TTTT","String AAAA is")
// DNAStrand("ATTGC"),"TAACG","String ATTGC is")
// DNAStrand("GTAT"),"CATA","String GTAT is")

function DNAStrand(dna) {
  let letters = { C: "G", G: "C", A: "T", T: "A" };
  return dna
    .split("")
    .map((x) => letters[x])
    .join("");
}

function DNAStrand(dna) {
  let str = dna.split("");
  let arr = [];
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] === "A") {
      arr.push("T");
    } else if (str[i] === "T") {
      arr.push("A");
    } else if (str[i] === "C") {
      arr.push("G");
    } else {
      arr.push("C");
    }
  }
  return arr.join("");
}
