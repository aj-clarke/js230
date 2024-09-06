// function processData(numArr, cb) {
//   setTimeout(() => {
//     const processedData = numArr.map(num => {
//       return cb(num);
//     });

//     console.log(processedData);
//   }, 1000)
// }

// processData([1, 2, 3], (number) => number * 2);

function processDataPromise(numArr, func) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const processedData = numArr.map(num => func(num));
      resolve(processedData);
    }, 1000);
  });
}

processDataPromise([1, 2, 3], (number) => number * 2)
  .then((processedNumbers) => {
    console.log(processedNumbers);
  });