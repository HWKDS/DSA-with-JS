// time: O(n)
// space: O(n)
var intersect = function (nums1, nums2) {
  let map = new Map();
  let arr = [];
  for (let val of nums1) {
    map.set(val, (map.get(val) || 0) + 1);
  }
  for (let val of nums2) {
    if (map.has(val) && map.get(val) > 0) {
      arr.push(val);
      map.set(val, map.get(val) - 1);
    }
  }
  return arr;
};
