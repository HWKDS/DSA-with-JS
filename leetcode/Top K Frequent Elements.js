var topKFrequent = function (nums, k) {
  let map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  let arr = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  return arr.slice(0, k).map((item) => item[0]);
};
