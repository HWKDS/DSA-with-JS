// time complexity: O(n)
// space complexity: O(n)
var isValid = function (s) {
  let stack = [];
  let map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else {
      prev = stack.pop();
      if (prev !== map[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
