// TODO: fix getNode, test getParent, test removeChild

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

/*
treeMethods.removeChild = function(target) {
  let childToRemove = this.getNode(target);

  if (childToRemove.children.length > 0) { return false; }
  else {
    let parent = this.getParent(target);
    parent.children = parent.children.filter((node) => {
      return node !== target;
    });
  }
};

treeMethods.getParent = function(target) {
  let children = this.children;

  children.forEach((node) => {
    if (target === node) {
      return this;
    } else {
      node.getParent(target);
    }
  });
};
*/

treeMethods.getNode = function(target) {
  if (this.value === target) {
    return this;
  }

  if (this.children.length > 0) {
    let result;
    this.children.forEach((node) => {
      if (node.getNode(target) !== undefined) { result = node.getNode(target); }
    });
    return result;
  }
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
 * getNode: linear
 * contains: linear
 * Total: linear
 */
