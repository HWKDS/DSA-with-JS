var dailyTemperatures = function (temperatures) {
  let stack = [];
  let ans = new Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      let prevIndex = stack.pop();
      ans[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }
  return ans;
};
