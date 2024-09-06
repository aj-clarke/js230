// walk() calls the function "callback" once for each node
function walk(node, callback) {
  callback(node);                                     // do something with node

  for (let i = 0; i < node.childNodes.length; i++){   // for each child node
    walk(node.childNodes[i], callback);               // recursively call walk()
  }
}

walk(document.body, (node) => {                       // log nodeName of every node
  console.log(node.nodeName);
});