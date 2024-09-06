// Modify this to target only paragraphs inside the <div class='intro'> element
// let introClass = document.getElementsByClassName('intro');

// console.log(introClass);

// introClassElements = Array.prototype.slice.call(introClass);

// console.log(introClassElements);

// let paragraphs = [];
// introClassElements.forEach(node => {
//   if (node instanceof HTMLDivElement) {
//     paragraphs.push(node.getElementsByTagName('p')[0]);
//   }
// });

// paragraphs.forEach(node => {
//   node.classList.add('article-text'); 
// });



let introClass = document.getElementsByClassName('intro');
let introClassElements = Array.prototype.slice.call(introClass);
// let paragraphs = [];

introClassElements.forEach(node => {
  if (node instanceof HTMLDivElement) {
    let paragraphs = node.getElementsByTagName('p');

    Array.prototype.slice.call(paragraphs).forEach(node => {
     node.classList.add('article-text'); 
    });
  }
});





// let p = document.body.childNodes[1].childNodes[1].childNodes[1]
// undefined
// p.parentElement.classList.contains('intro')
// true
// p.parentElement instanceof HTMLDivElement
// true