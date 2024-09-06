// Write a JavaScript function that adds the class article-text to every <p> tag in this HTML:

// First attempt. No need to create the recursive fuction as a nested function
function addClass() {
  function walk(node, callback) {
    callback(node)

    for (let i = 0; i < node.childNodes.length; i++) {
      walk(node.childNodes[i], callback);
    }
  }

  walk(document.body, node => {
    if (node.nodeName === 'P') {
      node.classList.add('article-text');
    }
  });
}

// Second attempt, clean
function addClass(node) {   // Could have used a more descriptive function name
  if (node instanceof HTMLParagraphElement) {
    node.classList.add('article-textv2');
  }

  node.childNodes.forEach(node => {
    addClass(node);
  });
}

// LS Solution
function addClassToParagraphs(node) {
  if (node instanceof HTMLParagraphElement) {
    node.classList.add("article-text");
  }

  let nodes = node.childNodes;
  for (let index = 0; index < nodes.length; index += 1) {
    addClassToParagraphs(nodes[index]);
  }
}

addClassToParagraphs(document.body);