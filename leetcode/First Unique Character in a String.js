var firstUniqChar = function (s) {
  let map = new Map();
  for (let val of s) {
    map.set(val, (map.get(val) || 0) + 1);
  }
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
};

console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
console.log(firstUniqChar("aabb"));
