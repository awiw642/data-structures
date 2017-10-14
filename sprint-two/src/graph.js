// Instantiate a new graph
var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  let newNode = {
    value: node,
    edges: {}
  };
  this.nodes[node] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return (!!this.nodes[node]);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  let nodeEdges = this.nodes[node].edges;

  for (let toNode in nodeEdges) {
    this.removeEdge(toNode, node);
  }

  delete this.nodes[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return (!!this.nodes[fromNode].edges[toNode]);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode].edges[toNode] = this.nodes[toNode];
  this.nodes[toNode].edges[fromNode] = this.nodes[fromNode];
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode].edges[toNode];
  delete this.nodes[toNode].edges[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  if (typeof cb !== 'function') { throw undefined; }
  for (let node in this.nodes) {
    cb(node);
  }
};


/*
 * Complexity: What is the time complexity of the aboveffu ations di* addNode: constant
 * contains: constant
 * removeNode: linear
 * hasEdge: constant
 * addEdge: constant
 * removeEdge: constant
 * forEachNode: linear
 * Total: linear
 */
