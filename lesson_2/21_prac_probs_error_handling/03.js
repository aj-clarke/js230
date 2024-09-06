// Implement a function retryOperation that attempts to perform an operation by calling a provided function operationFunc. If operationFunc throws an error, retryOperation should retry the operation up to two additional times before giving up and logging "Operation failed".

// function retryOperation(operationFunc) {
//   for (let i = 0; i <= 2; i++) {
//     let promise = operationFunc();
//     if (promise.resolve) return promise;
//   }

//   return promise;
// }

// retryOperation(
//   () =>
//     new Promise((resolve, reject) =>
//       Math.random() > 0.33
//         ? resolve("Success!")
//         : reject(new Error('Fail!'))
//     )
// );

function retryOperation(operationFunc) {
  let attempts = 0;

  function attempt() {
    return operationFunc()
      .catch((err) => {
        if (attempts < 2) {
          attempts++;
          console.log(`Retry attempt #${attempts}`);
          return attempt();
        } else {
          throw err;
        }
      });
  }

  return attempt().catch(() => console.error("Operation failed"));
}

retryOperation(
  () =>
    new Promise((resolve, reject) =>
      Math.random() > 0.33
        ? resolve("Success!")
        : reject(new Error('Fail!'))
    )
);
