// Use Promise.all() to execute two instances of the flakyService function and one of the loadData function concurrently. Log the results if all the operations are successful. Handle the situation where one or more of the promises might fail by logging "One or more operations failed".

function flakyService() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve('Operation Successful');
    } else {
      reject('Object failed!');
    }
  });
}

function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve('Data loaded');
      } else {
        reject('Network error');
      }
    }, 1000);
  });
}

Promise.all([flakyService(), flakyService(), loadData()])
  .then((results) => {
    results.forEach(result => {
      console.log(result);
    });
  })
  .catch(() => {
    console.error('One or more operations failed');
  });

// LS SOLUTION
// Promise.all([flakyService(), flakyService(), loadData()])
// .then((results) => {
//   console.log(results);
//   // Logs all results if successful
// })
// .catch(() => {
//   console.error("One or more operations failed");
//   // Logs if any operation fails
// });