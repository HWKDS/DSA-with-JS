// time: O(n)
// space: O(n)
var longestConsecutive = function (nums) {
  let set = new Set(nums);
  let longest = 0;
  for (let num of set) {
    if (!set.has(num - 1)) {
      let current = num;
      let count = 1;
      while (set.has(current + 1)) {
        current++;
        count++;
      }
      longest = Math.max(longest, count);
    }
  }
  return longest;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // 9
