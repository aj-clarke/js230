const promise = new Promise((resolve, reject) => {
  throw new Error("Ooops!");
});

promise
  .then((result) => {
    // this will not run because of the above error
  })
  .catch((error) => {
    console.error("Caught an eror:", error.message);
  })