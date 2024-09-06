// document.addEventListener('DOMContentLoaded', () => {
//   let answer = Math.floor(Math.random() * 100) + 1;

//   let submit = document.querySelectorAll('input')[1];
//   submit.addEventListener('click', event => {
    
//   });

// });

document.addEventListener('DOMContentLoaded', () => {
  let answer = Math.floor(Math.random() * 100) + 1;
  let guessInput = document.querySelector('#guess'); // `input` with id of `guess`
  let form = document.querySelector('form');
  let introMessage = 'Guess a number from 1 to 100';
  let guessStatus = document.querySelector('p')
  guessStatus.textContent = introMessage;
  let guessCount = 0;
  let newGameLink = document.querySelector('a');
  
  form.addEventListener('submit', event => {
    event.preventDefault();
    let guess = Number.parseInt(guessInput.value, 10);
    let message;
    
    if (guess > answer) {
      message = `Answer is lower than ${guess}`;
    } else if (guess < answer) {
      message = `Answer is higher than ${guess}`;
    } else if (guess === answer) {
      message = `You guessed the correct number in ${guessCount} tries!`;
    }
    
    guessStatus.textContent = message;
    guessCount += 1;
  });

  newGameLink.addEventListener('click', event => {
    event.preventDefault();
    answer = Math.floor(Math.random() * 100) + 1;
    guessStatus.textContent = introMessage;
    guessCount = 0;
  })
});


// LS SOLUTION
// document.addEventListener('DOMContentLoaded', function() {
//   let form = document.querySelector('form');
//   let input = document.querySelector('#guess');
//   let paragraph = document.querySelector('p');
//   let link = document.querySelector('a');  
//   let answer;
//   let guesses;

//   function newGame() {
//     answer = Math.floor(Math.random() * 100) + 1;
//     guesses = 0;
//     paragraph.textContent = 'Guess a number from 1 to 100';
//   }
  
//   form.addEventListener('submit', event => {
//     event.preventDefault();

//     let guess = parseInt(input.value, 10);
//     let message;

//     guesses += 1;
    
//     if (guess === answer) {
//       message = `You guessed it! It took you ${guesses} guesses.`;
//     } else if (guess > answer) {
//       message = `My number is lower than ${guess}`;
//     } else {
//       message = `My number is higher than ${guess}`;
//     }
    
//     paragraph.textContent = message;
//   });

//   link.addEventListener('click', event => {
//     event.preventDefault();
//     newGame();
//   });
  
//   newGame();
// });