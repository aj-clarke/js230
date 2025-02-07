let promise1 = Promise.resolve(3);
let promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
let promises = [promise1, promise2];

Promise.allSettled(promises).then((results) => {
  results.forEach(result => console.log(result.status));
});
// output:
// fulfilled
// rejected