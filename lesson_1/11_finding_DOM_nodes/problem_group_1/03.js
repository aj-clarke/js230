function walk(node, callback) {
  callback(node);

  node.childNodes.forEach(node => {
    walk(node, callback);
  });
}

// find all `p` elements
function getElementsByTagName(node, tagName) {
  let matchingElements = [];

  walk(node, node => {
    if (node.nodeName === tagName) {
      matchingElements.push(node);
    }
  });

  return matchingElements;
}

// add class name to element
function addClassToElementTagName(node, classString, tagName) {
  let elementList = getElementsByTagName(node, tagName);
  elementList.forEach(node => {
    node.classList.add(classString);
  });
}