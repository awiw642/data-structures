var Stack = function() {
  let stack = Object.create(stackMethods);
  stack.storage = {};
  stack.counter = 0;

  return stack;
};

var stackMethods = {};

stackMethods.push = function (value) {
  this.storage[this.counter] = value;
  this.counter++;
};

stackMethods.pop = function () {
  let result = this.storage[this.counter - 1];
  delete this.storage[this.counter - 1];
  this.counter--;

  if (this.counter < 0) {
    this.counter = 0;
  }

  return result;
};

stackMethods.size = function () {
  return this.counter;
};


