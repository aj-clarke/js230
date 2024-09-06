myFirstPromise
.then((successMessage) => {
  console.log("Yay! " + successMessage);
})
.catch((errorMessage) => {
  console.error("Uh oh! " + errorMessage);
})
.finally(() => {
  console.log("This runs no matter what.");
});