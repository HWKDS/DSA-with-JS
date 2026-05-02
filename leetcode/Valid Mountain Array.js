// time complexity: O(n)
// space complexity: O(1)
var validMountainArray = function (arr) {
  let n = arr.length;
  if (n < 3) return false;

  let i = 0;
  while (i + 1 < n && arr[i] < arr[i + 1]) {
    i++;
  }
  if (i === 0 || i === n - 1) return false;

  while (i + 1 < n && arr[i] > arr[i + 1]) {
    i++;
  }
  return i === n - 1;
};

console.log(validMountainArray([0, 3, 2, 1])); // true
console.log(validMountainArray([2, 1])); // false
console.log(validMountainArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])); // false
