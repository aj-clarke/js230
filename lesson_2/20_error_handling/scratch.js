const promise = new Promise((resolve, reject) => {
  throw new Error('Ooops!');
});

promise
  .then((result) => {
    // won't run due to an error occurring and the promise not being fullfilled
  })
  .catch((error) => {
    console.error('Caught an error!', error.message);
  });