function findPElements() {
  let pElements = []
  let body = document.body;

  body.childNodes.forEach(node => {
    if (node instanceof HTMLParagraphElement) pElements.push(node);
   });

  return pElements;
}
