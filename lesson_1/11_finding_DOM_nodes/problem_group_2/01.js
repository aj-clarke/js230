// MY SOLUTION - created a reusable function
function addClassToGivenElementTags(node, tagName, classString) {
  let elementList = node.getElementsByTagName(tagName);

  Array.prototype.slice.call(elementList).forEach(node => {
    node.classList.add(classString);
  });
}


// LS SOLUTION - takes a one-of approach
let paragraphs = document.getElementsByTagName("p");
for (let index = 0; index < paragraphs.length; index += 1) {
  paragraphs[index].classList.add("article-text");
}