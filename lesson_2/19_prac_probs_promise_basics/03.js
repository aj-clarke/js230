// Create a promise called flakyService that simulates a service that sometimes fails. The promise should resolve with "Operation successful" or reject with "Operation failed" randomly. Use .then() for a successful operation log and .catch() for logging a failed operation.

let flakyService = () => new Promise((resolve, reject) => {
  let result = Math.floor(Math.random() * 2);

  if (result === 1) {
// LS USED if (Math.random() > 0.5) {
// Eliminates the need for coding out line 4
    resolve('Operation Successful');
  } else {
    reject('Operation Failed!');
  }
});

flakyService()
  .then(successMessage => {
    console.log(successMessage);
  })
  .catch(failureMessage => {
    console.log(failureMessage);
  });


// LS .then and .catch SOLUTION
  // .then(console.log)
  // .catch(console.error);

