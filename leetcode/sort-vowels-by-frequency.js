// Time Complexity: O(n log n) due to sorting
// Space Complexity: O(n) for frequency maps and sorted vowels
var sortVowels = function (s) {
  let vowels = new Set(["a", "e", "i", "o", "u"]);
  let freq = new Map();
  let firstIndex = new Map();
  let position = [];
  //
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (vowels.has(ch)) {
      position.push(i);

      freq.set(ch, (freq.get(ch) || 0) + 1);
      if (!firstIndex.has(ch)) {
        firstIndex.set(ch, i);
      }
    }
  }
  let unique = [...freq.keys()];

  unique.sort((a, b) => {
    if (freq.get(a) !== freq.get(b)) {
      return freq.get(b) - freq.get(a);
    }
    return firstIndex.get(a) - firstIndex.get(b);
  });
  let sortedVowels = [];
  for (let ch of unique) {
    let count = freq.get(ch);
    for (let i = 0; i < count; i++) {
      sortedVowels.push(ch);
    }
  }
  let arr = s.split("");
  let idx = 0;
  for (let pos of position) {
    arr[pos] = sortedVowels[idx++];
  }
  return arr.join("");
};

let s = "leetcode";
console.log(sortVowels(s));
