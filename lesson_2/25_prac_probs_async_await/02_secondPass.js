// function loadData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (Math.random() > 0.5) {
//         resolve("Data loaded");
//       } else {
//         reject("Network error");
//       }
//     }, 1000);
//   });
// }

async function loadAsyncData() {
  try {
    const message = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve('Data Loaded');
        } else {
          reject('Network Error');
        }
      }, 1000);
    });
    console.log(message);
  } catch(error) {
    console.error('An error occurred:', error);
  }
}

loadAsyncData();