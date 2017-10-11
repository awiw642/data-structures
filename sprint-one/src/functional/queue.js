var Queue = function() {
  var someInstance = {};
  var storage = {};
  let startofQueue = 0;
  let endOfQueue = 0;

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
