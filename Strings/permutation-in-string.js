// 567. Permutation in String
// Given two strings s1 and s2, return true if s2 contains the permutation of s1.
// In other words, one of s1's permutations is the substring of s2.

// e.g. main: a b a c a b b
// e.g. str2: a a b b c
// map: {a: 2, b: 2, c: 1}

let findPermutation = function (str, pattern) {
  let windowStart = 0;
  let matched = 0;
  let patternFrequency = {};

  for (let char of pattern) {
    patternFrequency[char] = (patternFrequency[char] || 0) + 1;
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (rightChar in patternFrequency) {
      patternFrequency[rightChar] -= 1;
      if (patternFrequency[rightChar] === 0) {
        matched += 1;
      }
    }

    if (matched === Object.keys(patternFrequency).length) return true;

    if (windowEnd >= pattern.length - 1) {
      let leftChar = str[windowStart];
      windowStart += 1;
      if (leftChar in patternFrequency) {
        if (patternFrequency[leftChar] === 0) {
          matched -= 1;
        }
        patternFrequency[leftChar] += 1;
      }
    }
  }
  return false;
};

console.log(`Permutation exist: ${findPermutation("oidbcaf", "abc")}`);
console.log(`Permutation exist: ${findPermutation("odicf", "dc")}`);
console.log(`Permutation exist: ${findPermutation("bcdxabcdy", "bcdyabcdx")}`);
console.log(`Permutation exist: ${findPermutation("aaacb", "abc")}`);
