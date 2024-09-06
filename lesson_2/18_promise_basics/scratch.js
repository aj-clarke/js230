// let myFirstPromise = new Promise((resolve, reject) => {
//   // We do something asynchronous here, and then call resolve or reject

//   // This is just an example condition
//   let condition = true;
//   if (condition) {
//     // resolve('We did it!');
//     resolve({ status: 'We did it!',
//               name: 'AJ',
//     });
//   } else {
//     reject('We failed!');
//   }
// });

// console.log(myFirstPromise);
// for (let key in myFirstPromise) {
//   console.log(key);
//   console.log(myFirstPromise[key]);
// }

// myFirstPromise
//   .then((successMessage) => {
//     console.log(successMessage);
//   })
  // .then(() => console.log('Yes!'))
  // .catch((errorMessage) => {
  //   console.log('Oh no! ' + errorMessage);
  // })
  // .finally(() => {
  //   console.log('Runs no matter what')
  // });



// CHAINING PROMISES

new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result);
    return result * 2;
  })
  .then(function (result) {
    console.log(result);
    return result * 2;
  })
  .then(function (result){
    console.log(result);
    return result * 2;
  });