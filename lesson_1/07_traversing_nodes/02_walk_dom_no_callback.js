function walk(node) {
  console.log(node);

  for (let i = 0; i < node.childNodes.length; i++) {
    walk(node.childNodes[i]);
  }
}

walk(document.body);

