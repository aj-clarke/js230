/*
https://codepen.io/launchschool/pen/LbNWRJ
Using the following code, write some JavaScript to add a character counter that updates as the user types.
Note how the text turns red when you have more than 140 characters in the text box.
*/

// first solution
document.addEventListener('DOMContentLoaded', () => {
  let countStart = 140;
  let count;
  let countOutput = document.querySelector('p');
  countOutput.textContent = '140 characters remaining';
  let textArea = document.querySelector('textarea');
  
  textArea.addEventListener('keyup', event => {
    let totalChars = textArea.value.length;
    count = countStart - totalChars;
    countOutput.textContent = `${count} characters remaining`;
    
    textArea.classList.toggle('invalid', count < 0);
  });
})


// second solution added button disabling/enabling feature
document.addEventListener('DOMContentLoaded', () => {
  let maxChars = 140;
  let textBox = document.querySelector('textarea');
  let charCountTextArea = document.querySelector('.counter');
  let submitButton = document.querySelector('button');
  
  charCountTextArea.textContent = '140 characters remaining';
  
  textBox.addEventListener('keyup', event => {
    let charsRemaining = maxChars - textBox.value.length;
    if (charsRemaining < 0) {
      textBox.style.color = 'red';
      if (!submitButton.hasAttribute('disabled')) {
        submitButton.setAttribute('disabled', true);
      }
    } else {
      textBox.style.color = 'black';
      if (submitButton.hasAttribute('disabled')) {
        submitButton.removeAttribute('disabled');
      }
    }
    charCountTextArea.textContent = `${charsRemaining} characters remaining`;
  });
  
});
// LS SOLUTION

document.addEventListener('DOMContentLoaded', () => {
  let composer = document.querySelector('.composer');
  let textarea = composer.querySelector('textarea');
  let counter = composer.querySelector('.counter');
  let button = composer.querySelector('button');
  
  function updateCounter() {
    let length = textarea.value.length;
    let remaining = 140 - length;
    let message = `${remaining.toString()} characters remaining`;
    let invalid = remaining < 0;
    
    textarea.classList.toggle('invalid', invalid);
    button.disabled = invalid;

    counter.textContent = message;    
  }
  
  textarea.addEventListener('keyup', updateCounter);
  
  updateCounter();
});