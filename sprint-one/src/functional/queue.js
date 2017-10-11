var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let startofQueue = 0;
  let endOfQueue = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[endOfQueue] = value;
    endOfQueue++;
  };

  someInstance.dequeue = function() {

    let result = storage[startofQueue];
    delete storage[startofQueue];
    startofQueue++;
    return result;
  };

  someInstance.size = function() {
    let size = endOfQueue - startofQueue;
    if (size < 0) { return 0; }
    else { return size; }
  };

  return someInstance;
};
