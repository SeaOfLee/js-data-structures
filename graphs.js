// Graphs
const { createQueue } = require("./queue");

function createNode(key) {
  const neighbors = [];

  return {
    key,
    neighbors,
    addNeighbor(node) {
      neighbors.push(node);
    }
  };
}

function createGraph(directed = false) {
  const nodes = [];
  const edges = [];
  return {
    directed,
    nodes,
    edges,
    addNode(key) {
      nodes.push(createNode(key));
    },
    getNode(key) {
      return nodes.find(node => node.key === key);
    },
    addEdge(node1key, node2key) {
      const node1 = this.getNode(node1key);
      const node2 = this.getNode(node2key);
      node1.addNeighbor(node2);
      edges.push(`${node1key}-${node2key}`);

      if (!directed) {
        node2.addNeighbor(node1);
      }
    },
    print() {
      return nodes
        .map(({ key, neighbors }) => {
          let result = key;
          if (neighbors.length) {
            result += ` => ${neighbors.map(n => n.key).join(" ")}`;
          }

          return result;
        })
        .join("\n");
    },
    breadthFirstSearch(startingNodeKey, visitFn) {
      const startingNode = this.getNode(startingNodeKey);
      const visited = nodes.reduce((acc, node) => {
        acc[node.key] = false;
        return acc;
      }, {});
      const queue = createQueue();
      queue.enqueue(startingNode);

      while (!queue.isEmpty()) {
        const currentNode = queue.dequeue();

        if (!visited[currentNode.key]) {
          visitFn(currentNode);
          visited[currentNode.key] = true;
        }

        currentNode.neighbors.forEach(node => {
          if (!visited[node.key]) {
            queue.enqueue(node);
          }
        });
      }
    },
    depthFirstSearch(startingNodeKey, visitFn) {
      const startingNode = this.getNode(startingNodeKey);
      const visited = nodes.reduce((acc, node) => {
        acc[node.key] = false;
        return acc;
      }, {});

      function explore(node) {
        if (visited[node.key]) {
          return;
        }

        visitFn(node);
        visited[node.key] = true;

        node.neighbors.forEach(node => explore(node));
      }
      explore(startingNode);
    }
  };
}

// Breadth First Search

// const graph = createGraph(true);

// graph.addNode("Lee");
// graph.addNode("Ella");
// graph.addNode("Shannon");
// graph.addNode("Wally");

// graph.addEdge("Lee", "Shannon");
// graph.addEdge("Shannon", "Lee");
// graph.addEdge("Lee", "Ella");
// graph.addEdge("Lee", "Wally");
// graph.addEdge("Shannon", "Ella");
// graph.addEdge("Shannon", "Wally");
// graph.addEdge("Ella", "Shannon");
// graph.addEdge("Ella", "Wally");

// console.log(graph.print());

// for Breadth First Search
const graph = createGraph(true);
const nodes = ["a", "b", "c", "d", "e", "f"];
const edges = [
  ["a", "b"],
  ["a", "e"],
  ["a", "f"],
  ["b", "d"],
  ["b", "e"],
  ["c", "b"],
  ["d", "c"],
  ["d", "e"]
];

nodes.forEach(node => {
  graph.addNode(node);
});

edges.forEach((...nodes) => {
  // graph.addEdge(...nodes)
  graph.addEdge(nodes[0][0], nodes[0][1]);
});

// graph.breadthFirstSearch("a", node => {
//   console.log(node.key);
// });

graph.depthFirstSearch("a", node => {
  console.log(node.key);
});

exports.createNode = createNode;
exports.createGraph = createGraph;
