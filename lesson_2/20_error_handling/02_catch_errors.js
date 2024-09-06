doSomethingAsync()
  .then((result) => doSomethingElseAsync(result))
  .then((newResult) => doThirdThingAsync(newResult))
  .catch((error) => console.error("An error occurred:", error));