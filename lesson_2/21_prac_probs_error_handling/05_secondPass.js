function loadData() {
  return new Promise((resolve, reject) => {
    if (Math.random() > .5) {
      resolve('Data Loaded');
    } else {
      reject('Network Error');
    }
  }).catch((error) => {
    console.error(error);
    return new Promise((resolve) => resolve('Using Cached Data'));
  });
}

loadData().then((successMessage) => console.log(successMessage))