// Convert the processData function from Q3 of this assignment to a new function named processDataPromise that uses promises. This function should return a promise that processes an array of numbers after a delay, utilizing the .then() method for logging the altered array.

function processDataPromise(arr, cb) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(arr.map(cb));
      // LS DID THIS INSTEAD OF LINE 6
      // const processed = arr.map(cb);
      // resolve(processed);
    }, 1000);
  });
}

processDataPromise([1, 2, 3], (number) => number * 2).then((processedNumbers) => {
  console.log(processedNumbers);
});











// function processData(arr, callback) {
//   setTimeout(() => {
//     let newArr = arr.map(callback);
//     console.log(newArr);
//   }, 1000)
// }

// processData([1, 2, 3], (number) => number * 2);