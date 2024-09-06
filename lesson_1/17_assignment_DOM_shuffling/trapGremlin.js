// let body = document.body

// let h1List = document.querySelectorAll('h1');
// h1List = Array.prototype.slice.call(h1List);
// let headerH1;
// let articleH1;
// h1List.forEach(h1 => {
//   if (h1.textContent.includes('My Site!')) {
//     headerH1 = h1;
//   } else {
//     articleH1 = h1;
//   }
// });

// let bodyHeader = document.querySelector('header');
// body.insertAdjacentElement('afterbegin', bodyHeader);

// bodyHeader.insertAdjacentElement('afterbegin', headerH1);

// let nav = document.querySelector('nav');
// bodyHeader.insertAdjacentElement('beforeend', nav);

// let sectionContent = document.getElementById('content');
// let articleHeader = document.querySelectorAll('header')[1];
// sectionContent.firstElementChild.insertAdjacentElement('afterbegin', articleHeader);

// articleHeader.insertAdjacentElement('afterbegin', articleH1)

// let articleH2 = document.querySelector('h2');
// articleHeader.insertAdjacentElement('beforeend', articleH2)

// let article = document.querySelector('article');
// let figureList = document.querySelectorAll('figure');
// let figureCaptionList = document.querySelectorAll('figcaption');
// let figcaptionChinStick = figureCaptionList[0];
// let figcaptionBabyMop = figureCaptionList[1];

// figureList = Array.prototype.slice.call(figureList);
// figureChinStick = figureList[1];
// figureChinStick.appendChild(figcaptionChinStick);
// figureBabyMop = figureList[0];
// figureBabyMop.appendChild(figcaptionBabyMop);

// [figureList[0], figureList[1]] = [figureList[1], figureList[0]]
// figureList.forEach(figure => {
//   article.appendChild(figure);
// });