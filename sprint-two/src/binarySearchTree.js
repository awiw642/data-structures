var BinarySearchTree = function(value) {
  let tree = Object.create(BinarySearchTree.methods);

  tree.left = undefined; // Lower values
  tree.right = undefined; // Higher values
  tree.value = value;

  return tree;
};
BinarySearchTree.methods = {};

BinarySearchTree.methods.insert = function insert(value) {
  let newNode = BinarySearchTree(value);

  if (this.value < value) {
    if (this.right !== undefined) {
      let rightNode = this.right;
      rightNode.insert(value);
    }
    else { this.right = newNode; }
  }
  if (this.value > value) {
    if (this.left !== undefined) {
      let leftNode = this.left;
      leftNode.insert(value);
    } else { this.left = newNode; }
  }
};

BinarySearchTree.methods.contains = function contains(target) {
  if (this.value === target) {
    return true;
  } else if (this.left === undefined && this.right === undefined) {
    return false;
  } else if (target > this.value) {
    return this.right.contains(target);
  } else if (target < this.value) {
    return this.left.contains(target);
  }
};

BinarySearchTree.methods.depthFirstLog = function depthFirstLog(callback) {
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * insert: log n
 * contains: log n
 * depthFirstLog: linear
 */
