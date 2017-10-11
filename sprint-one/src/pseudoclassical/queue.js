var Queue = function() {
  this.storage = {};
  this.startOfQueue = 0;
  this.endOfQueue = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.endOfQueue] = value;
  this.endOfQueue++;
};

Queue.prototype.dequeue = function () {
  let result = this.storage[this.startOfQueue];
  delete this.storage[this.startOfQueue];
  this.startOfQueue++;
  return result;
};

Queue.prototype.size = function () {
  let size = this.endOfQueue - this.startOfQueue;
  if (size < 0) { size = 0; }
  return size;
};
