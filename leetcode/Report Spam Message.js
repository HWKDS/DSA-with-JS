// time complexity: O(n+m)
// space complexity: O(m)
var reportSpam = function (message, bannedWords) {
  let set = new Set(bannedWords);
  let count = 0;
  for (let word of message) {
    if (set.has(word)) {
      count++;
      if (count >= 2) return true;
    }
  }
  return false;
};

console.log(reportSpam(["hello", "world", "hello"], ["hello"])); // true
console.log(reportSpam(["hello", "world"], ["hello"])); // false
console.log(
  reportSpam(["hello", "world", "hello", "world"], ["hello", "world"]),
); // true
