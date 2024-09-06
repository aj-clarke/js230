// Practice chaining promises by creating a promise chain that involves three promises. The first promise should resolve with a number, then the chain should double the number and add 5 in successive .then() calls. Log the result after the final operation.

function chainPromise() {
  return new Promise(resolve => {
    resolve(5);
  });
}

chainPromise()
  .then(promiseValue => promiseValue * 2)
  .then(promiseValue => {
    console.log(promiseValue + 5)
  })
  // .finally(console.log);
// LOGS: 15


// LS SOLUTION
Promise.resolve(7)
  .then((number) => number * 2)
  .then((number) => number + 5)
  .then((result) => console.log(result));
// Logs: 19