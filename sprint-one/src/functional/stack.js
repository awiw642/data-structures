var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let counter = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[counter] = value;
    counter++;
  };

  someInstance.pop = function() {
    let result = storage[counter - 1];
    delete storage[counter - 1];
    counter--;

    if (counter < 0) {
      counter = 0;
    }

    return result;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
