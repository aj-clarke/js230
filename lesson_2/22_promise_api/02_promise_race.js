// I added all of the id/clearTimeout logic for fun
let id1;
let promise1 = new Promise((resolve, reject) => {
  id1 = setTimeout(resolve, 2500, 'loser');
});

let id2;
let promise2 = new Promise((resolve, reject) => {
  id2 = setTimeout(resolve, 100, 'winner');
});

Promise.race([promise1, promise2]).then((value) => {
  // lines 14-15 clear the timeout of either id to stop it from hanging the program
  clearTimeout(id1);
  clearTimeout(id2);
  console.log(value);
  // outputs: 'winner'
});