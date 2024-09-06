// Once again, you have multiple instances of flakyService promises. Implement a strategy using Promise.any() to execute all services and return the result of the first service that succeeds. If all services fail, log an error message.

function flakyService() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Operation successful");
    } else {
      reject("Operation failed");
    }
  });
}

const services = [flakyService(), flakyService(), flakyService()];

// Promise.any(services)
//   .then(console.log)
//   .catch(() => console.log('All operations failed'));


// LS SOLUTION
Promise.any(services)
  .then((result) => {
    console.log(`First successful service result: ${result}`);
  })
  .catch((error) => {
    console.error(`All operations failed`, error);
  })