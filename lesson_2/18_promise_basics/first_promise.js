let myFirstPromise = new Promise((resolve, reject) => {
  // we do some async work here, then call resolve or reject

  // just a sample condition
  let condition = true;
  if (condition) {
    // this value will be passed to the .then()
    resolve("Success!");
  } else {
    // this error will be passed to the .catch()
    reject("Failure!");
  }
});