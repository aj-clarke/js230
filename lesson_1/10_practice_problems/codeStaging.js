// 

// 1. Starting with the `document` node, use the `lastChild` and `childNodes` properties to change the text color to red on the `On the River` heading and set its font size to 48 pixels.

// LS SOLUTION
let html = document.childNodes[1]; // skip doctype
let body = html.lastChild;         // skip head and text nodes
let heading = body.childNodes[1];  // skip text node
heading.style.color = 'red';
heading.style.fontSize = '48px';



// 2. Count the paragraphs on the page, and then log the result.
let pCount = 0;

body.childNodes.forEach(node => {
  if (node.nodeName === 'P') {
      pCount += 1;
  }
});



// 3. Retrieve the first word from each paragraph on the page and log the entire list.

let pArray = [];

// MY SOLUTION
body.childNodes.forEach(node => {
  if (node.nodeName === 'P') {
      let text = node.firstChild.data;
      text = text.replace(/[\n\r]/g, '').trim().split(' ');
      pArray.push(text[0]);
  }
});

console.log(pArray);  // ["A", "The", "The", "Where", "And"]

// LS SOLUTION
let words = [];
walk(document, node => {
  if (node.nodeName === 'P') {
    let text = node.firstChild.data.trim();
    let firstWord = text.split(' ')[0];
    words.push(firstWord);
  }
});

console.log(words);  // ["A", "The", "The", "Where", "And"]



// 4. Add the class `stanza` to each paragraph except the first.

let firstP = true;

body.childNodes.forEach(node => {
  if (node.nodeName === 'P') {
    if (firstP) {
      firstP = false
    } else {
      node.className = 'stanza'; // classList may be a better option
    }
  }
});

// LS SOLUTION
let first = true;
walk(document, node => {
  if (node.nodeName === 'P') {
    if (first) {
      first = false;
    } else {
      node.classList.add('stanza');
    }
  }
});



// Count the images on the page, then count the PNG images. Log both results.

// MY SOLUTION
let imgCount = 0;
let pngCount = 0;

walk(document, node => {
  if (node.nodeName === 'IMG') {
    imgCount += 1;
    console.log('imageFound');
    if (node.src.includes('.png')) {
      pngCount += 1;
    }
  }
});

// LS SOLUTION

let images = [];
walk(document, node => {
  if (node.nodeName === 'IMG') {
    images.push(node);
  }
});

console.log(images.length);                      // 48 total images

let pngCount = images.filter(img => img.getAttribute('src').match(/png$/)).length;

console.log(pngCount);                           // 23 images in png format



// Change the link color to red for every link on the page.

// MY SOLUTION MATCHED LS SOLUTION
walk(document, node => {
  if (node.nodeName === 'A') {
    node.style.color = 'red';
  }
});