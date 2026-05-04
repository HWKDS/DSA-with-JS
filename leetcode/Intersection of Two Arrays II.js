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
console.log(intersect([1, 2, 2, 1], [2, 2])); // [2, 2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [4, 9]
