var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let newTailNode = Node(value);

    if (!list.head) {
      list.head = newTailNode;
      list.tail = newTailNode;
    } else {
      list.tail.next = newTailNode;
      list.tail = newTailNode;
    }
  };

  list.removeTail = function removeTail (previousNode, currentNode = list.head) {
    if (currentNode.next === null) {
      if (previousNode === undefined) {
        list.removeHead();
      } else { list.tail = previousNode; previousNode.next = null; }
    } else {
      removeTail(currentNode, currentNode.next);
    }
  };

  list.addToHead = function(value) {
    let newHeadNode = Node(value);

    if (!list.head) {
      list.head = newHeadNode;
      list.tail = newHeadNode;
    } else {
      let previousHead = list.head;
      list.head = newHeadNode;
      list.head.next = previousHead;
    }
  };

  list.removeHead = function () {
    let value = list.head.value;
    list.head = list.head.next;
    return value;
  };

  list.contains = function(target) {
    let node = list.head;
    while (node) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail: constant time
 * addToHead: constant time
 * removeHead: constant time
 * removeTail: linear time
 * contains: linear time
 * Total: linear time
 */

