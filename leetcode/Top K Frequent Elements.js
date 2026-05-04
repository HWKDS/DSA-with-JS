// time: O(nlogn)
//space: O(n)
var topKFrequent = function (nums, k) {
  let map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  let arr = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  return arr.slice(0, k).map((item) => item[0]);
};

// bucket method
// time: O(n)
// space: O(n)
var topKFrequent = function (nums, k) {
  let map = new Map();
  for (let val of nums) {
    map.set(val, (map.get(val) || 0) + 1);
  }
  let bucket = Array(nums.length + 1)
    .fill(0)
    .map(() => []);
  for (let [num, freq] of map) {
    bucket[freq].push(num);
  }
  let result = [];
  for (let i = bucket.length - 1; i >= 0; i--) {
    for (let num of bucket[i]) {
      result.push(num);
    }
    if (result.length === k) {
      return result;
    }
  }
};
