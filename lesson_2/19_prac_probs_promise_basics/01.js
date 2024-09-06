// Rewrite the downloadFile callback function you created in this assignment's Q2, as a new promise-based function called downloadFilePromise. Instead of using a callback, it should return a promise that resolves with the message "Download complete!" after a delay.

let downloadFilePromise = new Promise((resolve, reject) => {
  console.log('Downloading file...');
  setTimeout(() => {
    resolve('Download Complete!');
  }, 1500)
})
  // added this for testing
  .then(resolveMessage => {
    console.log(resolveMessage);
  });

// LS SOLUTION - They wrapped it in a function to be called where mine was just assigned the return value directly
// function downloadFilePromise() {
//   return new Promise((resolve) => {
//     console.log("Downloading file...");
//     setTimeout(() => {
//       resolve("Download complete!");
//     }, 1500);
//   });
// }
  // added this for testing
  // downloadFilePromise()
  //   .then(resolveMessage => {
  //     console.log(resolveMessage);
  //   });

