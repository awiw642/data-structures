var Queue = function() {
  let queue = Object.create(queueMethods);
  queue.storage = {};
  queue.startOfQueue = 0;
  queue.endOfQueue = 0;

  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.endOfQueue] = value;
  this.endOfQueue++;
};

queueMethods.dequeue = function () {
  let result = this.storage[this.startOfQueue];
  delete this.storage[this.startOfQueue];
  this.startOfQueue++;
  return result;
};

queueMethods.size = function () {
  let size = this.endOfQueue - this.startOfQueue;
  if (size < 0) { size = 0; }
  return size;
};
