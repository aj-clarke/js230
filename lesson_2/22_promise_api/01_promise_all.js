let promise1 = Promise.resolve(3);
let promise2 = 42;
let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
})