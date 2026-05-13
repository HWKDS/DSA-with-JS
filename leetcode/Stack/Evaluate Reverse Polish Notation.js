// time complexity: O(n)
// space complexity: O(n)
var evalRPN = function (tokens) {
  let stack = [];
  for (let val of tokens) {
    if (val != "+" && val != "-" && val != "/" && val != "*") {
      stack.push(Number(val));
    }
    if (val === "+") {
      let num1 = stack.pop();
      let num2 = stack.pop();
      stack.push(num1 + num2);
    }
    if (val === "-") {
      let num1 = stack.pop();
      let num2 = stack.pop();
      stack.push(num2 - num1);
    }
    if (val === "/") {
      let num1 = stack.pop();
      let num2 = stack.pop();
      stack.push(Math.trunc(num2 / num1));
    }
    if (val === "*") {
      let num1 = stack.pop();
      let num2 = stack.pop();
      stack.push(num2 * num1);
    }
  }
  return stack[0];
};

console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(evalRPN(["4", "13", "5", "/", "+"]));
console.log(
  evalRPN([
    "10",
    "6",
    "9",
    "3",
    "+",
    "-11",
    "*",
    "/",
    "*",
    "17",
    "+",
    "5",
    "+",
  ]),
);
