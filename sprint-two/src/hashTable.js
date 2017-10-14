var HashTable = function() {
  this._limit = 8;
  this._size = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v, r = true) {
  // By default, when running insert, check if the hash table needs to be resized.
  // However, skip this check if we are just repopulating a new hash table.
  // This is what the parameter 'r' is tracking.
  var index = getIndexBelowMaxForKey(k, this._limit);
  let result = [];
  let newValue = [k, v];
  let valuesAtIndex = this._storage.get(index);
  this._size++;

  if (valuesAtIndex !== undefined) {
    valuesAtIndex.forEach((currentValue) => {
      if (currentValue[0] !== k) {
        result.push(currentValue);
      }
    });
  }
  result.push(newValue);

  this._storage.set(index, result);
  if (r) { if (this.shouldResize()) { this.resize(); }}
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
  this._size--;

  if (valuesAtIndex !== undefined) {
    for (let i = 0; i < valuesAtIndex.length; i++) {
      if (valuesAtIndex[i][0] !== k) {
        result.push(valuesAtIndex[i]);
      }
    }
  }
  this._storage.set(index, result);
  if (this.shouldResize()) { this.resize(); }
  return k;
};

HashTable.prototype.shouldResize = function () {
  if (this._size / this._limit > 0.75 || this._size / this._limit < 0.25) { return true; }
  else { return false; }
};

HashTable.prototype.resize = function () {
  let allValues = [];

  // 1. Get and store all the values in the current hash table.
  for (let i = 0; i < this._limit; i++) {
    allValues = allValues.concat(this._storage.get(i));
  }

  // 2. Remove all undefined values from the store.
  allValues = allValues.filter((tuple) => tuple !== undefined);


  // 3. Determine the size of the new hash table.
  if (this._size / this._limit > 0.75) {
    this._limit = this._limit * 2;
  } else if (this._size / this._limit < 0.25) {
    this._limit = this._limit * 0.5;
  }

  // 4. Create a new hash table with the new size, and reset the size count to 0.
  this._storage = LimitedArray(this._limit);
  this._size = 0;

  // 5. Re-insert all the previous values into the new hash table.
  allValues.forEach((tuple) => {
    this.insert(tuple[0], tuple[1], false);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 * insert: typically constant, worst case linear
 * retrieve: typically constant, worst case linear
 * remove: typically constant, worst case linear
 * shouldResize: constant
 * resize: linear
 */
