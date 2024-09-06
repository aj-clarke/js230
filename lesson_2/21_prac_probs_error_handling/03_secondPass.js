function retryOperation(operationFunc) {
  let attempts = 1

  function attempt() {
    return operationFunc()
      .then((success) => {
        console.log(success);
      })
      .catch((error) => {
        console.error(`Attempt #${attempts}: ${error.message}`);
        if (attempts !== 3) {
          attempts += 1;
          attempt();
        } else {
          return error;
        };
      });
  }

  attempt().catch(() => console.error("Operation Failed"));
}

// function retryOperation(operationFunc) {
//   let attempts = 0;

//   function attempt() {
//     return operationFunc().catch((err) => {
//       if (attempts < 2) {
//         attempts++;
//         console.log(`Retry attempt #${attempts}`);
//         return attempt();
//       } else {
//         throw err;
//       }
//     });
//   }

//   return attempt().catch(() => console.error("Operation failed"));
// }


// Example usage:
retryOperation(
  () =>
    new Promise((resolve, reject) =>
      Math.random() > 0.33
        ? resolve("Success!")
        : reject(new Error("Fail!"))
    )
);