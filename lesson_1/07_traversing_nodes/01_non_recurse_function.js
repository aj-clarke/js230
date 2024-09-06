// function iterateAndLog(array) {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
// }

let letters = ['h', 'e', 'l', 'l', 'o'];

// iterateAndLog(letters);


function recurseAndLog(array) {
  console.log(array);
  if (array.length > 0) {
    console.log(array[0]);
    recurseAndLog(array.slice(1));
  }
}

recurseAndLog(letters);

console.log(letters);