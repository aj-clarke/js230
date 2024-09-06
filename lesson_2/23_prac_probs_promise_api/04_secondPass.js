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

Promise.any(services)
  .then((singleResult) => {
    console.log(`First successful service result: ${singleResult}`);
  })
  .catch((error) => {
    console.error('Operation Failed, all services failed:', error);
  });