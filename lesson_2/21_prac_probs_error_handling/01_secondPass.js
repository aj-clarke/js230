function flakyService() {
  return new Promise((resolve, reject) => {
    let random = Math.floor(Math.random() * 2);

    if (random === 1) {
      resolve('Operation Successful');
    } else {
      reject();
    }
  });
}

flakyService()
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((error) => {
    console.error('An error occurred');
  })
  .finally(() => {
    console.log('Flaky Service Operation Attempt Completed');
  });

