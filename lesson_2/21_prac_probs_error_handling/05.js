// Implement a loadData function that fetches data but sometimes fails. It should return a promise that either fulfils with "Data loaded" or rejects with "Network error". Use a .catch() block to return a recovery promise that resolves with "Using cached data" in case of failure.

function loadData() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve('Data Loaded');
    } else {
      reject('Network Error');
    }
  }).catch((error) => {
    console.error(error);
    return Promise.resolve('Using Cached Data');
  });
}

loadData()
  .then(console.log)

// loadData()
//   .then(console.log)
//   .catch((error) => {
//     console.error(error);
//     return new Promise((resolve, reject) => {
//       resolve('Using Cached Data');
//     })
//       .then(console.log)
//   })