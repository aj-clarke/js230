doSomethingAsync()
  .then((result) => doSomethingElseASync(result))
  .catch((error) => console.error('An error occurred:', error))
  .finally(() => {
    console.log('Cleaning up resources...');
  });