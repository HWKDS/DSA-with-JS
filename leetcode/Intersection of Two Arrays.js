// time complexity: O(n * m) where n and m are the lengths of nums1 and nums2 respectively
// space complexity: O(n) where n is the length of nums1
var intersection = function (nums1, nums2) {
  let result = new Set();

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        result.add(nums1[i]);
      }
    }
  }
  return [...result];
};

// time complexity: O(n + m) where n and m are the lengths of nums1 and nums2 respectively
// space complexity: O(n) where n is the length of nums1
var intersection = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let result = new Set();

  for (let num of nums2) {
    if (set1.has(num)) {
      result.add(num);
    }
  }
  return [...result];
};
