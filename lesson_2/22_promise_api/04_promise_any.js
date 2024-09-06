let promise1 = Promise.reject(0);
let promise2 = Promise.reject(1);
let promise3 = Promise.reject(2);
let promises = [promise1, promise2, promise3];

Promise.any(promises)
  .then((value) => console.log(value))
  .catch((value) => console.log(value));

// [AggregateError: All promises were rejected] { [errors]: [ 0, 1, 2 ] }