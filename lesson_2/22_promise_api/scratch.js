// // PROMISE.all()
// let promise1 = Promise.resolve(3);
// let promise2 = 42;
// let promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'foo');
// });

// Promise.all([promise1, promise2, promise3])
//   .then((promiseValues) => {
//     console.log(promiseValues);
//   });

// // PROMISE.race()
// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1500, 'one');
// })

// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, 'two');
// })

// Promise.race([promise1, promise2])
//   .then((winner) => console.log(winner));

// // PROMISE.allSettled();
// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'rejecteeeed!'));
// const promises = [promise1, promise2];

// Promise.allSettled(promises)
//   .then((promiseValues) => {
//     promiseValues.forEach(promise => console.log(promise))
//   });
// // { status: 'fulfilled', value: 3 }
// // { status: 'rejected', reason: 'rejecteeeed!' }

const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));
let promises = [promise1, promise2, promise3];

Promise.any(promises)
  .then((singleResult) => console.log(singleResult));