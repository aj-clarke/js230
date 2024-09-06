document.addEventListener('DOMContentLoaded', () => {
  let body = document.body;
  let textField = document.querySelector('.text-field');
  let content = document.querySelector('.content');

  textField.addEventListener('click', event => {
    event.stopPropagation()

    if (!textField.classList.contains('focused')) {
      event.target.classList.add('focused');
    }
  });

  let cursor;
  textField.addEventListener('click', event => {
    event.stopPropagation();

    clearInterval(cursor);
    textField.classList.remove('cursor');
    cursor = setInterval(() => {
      textField.classList.toggle('cursor');
    }, 500);
  });

  document.addEventListener('click', event => {
    textField.classList.remove('focused');
    clearInterval(cursor);
    textField.classList.remove('cursor');
  });

  document.addEventListener('keydown', event => {
    event.stopPropagation();
    if (textField.classList.contains('focused')) {
      let keyPressed = event.key;

      if (keyPressed === 'Backspace') {
        let newContent = String(content.textContent).slice(0, -1);
        content.textContent = newContent;
      }
      else content.append(keyPressed);
    }
  });
});


// LS Solution
// let cursorInterval;

// document.addEventListener('DOMContentLoaded', () => {
//   let textField = document.querySelector('.text-field');

//   textField.addEventListener('click', event => {
//     event.stopPropagation();
//     textField.classList.add('focused');

//     cursorInterval = cursorInterval || setInterval(() => textField.classList.toggle('cursor'), 500);
//   });

//   document.addEventListener('keydown', event => {
//     if (textField.classList.contains('focused')) {
//       let contentDiv = textField.querySelector('.content');
//       if (event.key === 'Backspace') {
//         contentDiv.textContent = contentDiv.textContent.slice(0, contentDiv.textContent.length - 1);
//       } else if (event.key.length === 1) {
//         contentDiv.textContent += event.key;
//       }
//     }
//   });

//   document.addEventListener('click', event => {
//     clearInterval(cursorInterval);
//     cursorInterval = null;

//     if (textField.classList.contains('focused')) {
//       textField.classList.remove('focused');
//       textField.classList.remove('cursor');
//     }
//   });
// });