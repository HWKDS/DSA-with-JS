class Stack {
  constructor() {
    this.array = [];
  }
  peek() {
    return this.array[this.array.length - 1];
  }
  push(value) {
    this.array.push(value);
    return this;
  }
  pop() {
    this.array.pop();
  }
}

let stack = new Stack();
stack.push("kds");
stack.push("sdk");
stack.pop();
stack.push("test");
stack.push("rest");
