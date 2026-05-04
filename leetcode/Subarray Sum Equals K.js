// time: O(n)
// space: O(n)
var subarraySum = function (nums, k) {
  let map = new Map();
  let count = 0;
  let sum = 0;
  map.set(0, 1);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
};
