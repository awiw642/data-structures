var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this[item] = item;
};

setPrototype.contains = function(item) {
  return (!!this[item]);
};

setPrototype.remove = function(item) {
  delete this[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 * add: constant;
 * contains: constant;
 * remove: constant;
 * total: constant;
 */
