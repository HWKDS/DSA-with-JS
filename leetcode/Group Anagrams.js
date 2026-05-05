var groupAnagrams = function (strs) {
  let map = new Map();
  for (let val of strs) {
    let sorted = val.split("").sort().join("");
    if (map.has(sorted)) {
      map.get(sorted).push(val);
    } else {
      map.set(sorted, [val]);
    }
  }
  return Array.from(map.values());
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
console.log(groupAnagrams(["a", "b", "c", "a"]));
