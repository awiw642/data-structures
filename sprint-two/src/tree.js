var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let node = Tree(value);
  this.children.push(node);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  } else if (this.children.length > 0) {
    return _.reduce(this.children, function (result, node) {
      if (result) {
        return true;
      }
      return node.contains(target);
    }, false);
  } else {
    return false;
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addChild: constant
 * contains: log n
 * Total: log n
 */
