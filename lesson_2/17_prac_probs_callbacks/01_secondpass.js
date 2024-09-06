function basicCallback(cb, num) {
  setTimeout(() => {
    cb(num);
  }, 2000);
}

basicCallback((number) => {
  console.log(number * 2);
}, 5);