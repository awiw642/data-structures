var Queue = function() {
  let queue = {
    storage: {},
    startOfQueue: 0,
    endOfQueue: 0
  };
  _.extend(queue, queueMethods);

  return queue;
};

var queueMethods = {
  enqueue: function (value) {
    this.storage[this.endOfQueue] = value;
    this.endOfQueue++;
  },

  dequeue: function () {
    let result = this.storage[this.startOfQueue];
    delete this.storage[this.startOfQueue];
    this.startOfQueue++;
    return result;
  },

  size: function () {
    let size = this.endOfQueue - this.startOfQueue;
    if (size < 0) { return 0; }
    else { return size; }
  }
};
