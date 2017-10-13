var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let result = [];
  let newValue = [k, v];
  let valuesAtIndex = this._storage.get(index);

  if (valuesAtIndex !== undefined) {
    valuesAtIndex.forEach((currentValue) => {
      if (currentValue[0] !== k) {
        result.push(currentValue);
      }
    });
  }
  result.push(newValue);

  this._storage.set(index, result);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let valuesAtIndex = this._storage.get(index);
  let result;

  if (valuesAtIndex !== undefined) {
    for (let i = 0; i < valuesAtIndex.length; i++) {
      if (valuesAtIndex[i][0] === k) {
        result = valuesAtIndex[i][1];
        break;
      }
    }
  }
  return result;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  let valuesAtIndex = this._storage.get(index);
  let result = [];

  if (valuesAtIndex !== undefined) {
    for (let i = 0; i < valuesAtIndex.length; i++) {
      if (valuesAtIndex[i][0] !== k) {
        result.push(valuesAtIndex[i]);
      }
    }
  }
  this._storage.set(index, result);
  return k;
};
/*
 * Complexity: What is the time complexity of the above functions?
 * insert: typically constant, worst case linear
 * retrieve: typically constant, worst case linear
 * remove: typically constant, worst case linear
 */
