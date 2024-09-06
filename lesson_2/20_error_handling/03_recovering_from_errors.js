doSomethingAsync()
  .then((result) => doSomethingElseAsync(result))
  .catch((error) => {
    console.error('An error occurred in the first two steps:', error);
    return fallbackValue;
  })
  .then((newResult) => doThridThingAsync(newResult));