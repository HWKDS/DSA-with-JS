//hashmap
var majorityElementByHashMap = function (nums) {
  let map = new Map();
  for (let num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }
  let maxFreq = 0;
  let answer;
  for (let [key, value] of map) {
    if (value > maxFreq) {
      maxFreq = value;
      answer = key;
    }
  }
  return answer;
};
// Boyer-Moore Voting Algorithm
var majorityElementByBoyerMoore = function (nums) {
  let candidate;
  let count = 0;
  for (let num of nums) {
    if (count === 0) candidate = num;
    if (candidate === num) {
      count++;
    } else {
      count--;
    }
  }
  return candidate;
};

let nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElementByHashMap(nums));
console.log(majorityElementByBoyerMoore(nums));
