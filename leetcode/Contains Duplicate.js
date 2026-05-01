// Time Complexity: O(n)
// Space Complexity: O(n)
var containsDuplicate = function (nums) {
  let set = new Set();
  for (let num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }
  return false;
};

let nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));
