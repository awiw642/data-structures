var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let stack = {
    storage: {},
    counter: 0
  };
  _.extend(stack, stackMethods);

  return stack;

};

var stackMethods = {
  push: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },

  pop: function() {
    let result = this.storage[this.counter - 1];
    delete this.storage[this.counter - 1];
    this.counter--;

    if (this.counter < 0) {
      this.counter = 0;
    }

    return result;
  },

  size: function() {
    return this.counter;
  }
};


