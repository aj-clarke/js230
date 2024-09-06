doSomethingAsync().then(
  (result) => doSomethingElseAsync(result),
  (error) => console.error('An error occurred:', error)
);