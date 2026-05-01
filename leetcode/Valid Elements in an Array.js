var findValidElements = function (nums) {
  let n = nums.length;

  if (n === 1) return nums;

  let leftValid = new Array(n).fill(false);
  let rightValid = new Array(n).fill(false);

  let leftMax = nums[0];
  leftValid[0] = true;

  for (let i = 1; i < n; i++) {
    if (nums[i] > leftMax) {
      leftValid[i] = true;
    }
    leftMax = Math.max(leftMax, nums[i]);
  }

  let rightMax = nums[n - 1];
  rightValid[n - 1] = true;

  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] > rightMax) {
      rightValid[i] = true;
    }
    rightMax = Math.max(rightMax, nums[i]);
  }

  let result = [];
  for (let i = 0; i < n; i++) {
    if (leftValid[i] || rightValid[i]) {
      result.push(nums[i]);
    }
  }

  return result;
};

let nums = [1, 2, 3, 4, 5];
let nums2 = [5, 4, 3, 2, 3];
let nums3 = [1, 4, 3, 2, 3, 1];
console.log(findValidElements(nums));
console.log(findValidElements(nums2));
console.log(findValidElements(nums3));
