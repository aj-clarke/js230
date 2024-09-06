// Write a function basicCallback that receives a callback function and a numeric argument. This function should execute the callback, passing it the number after 2 seconds using setTimeout. The callback should then multiply the number by 2 and log the result.

function basicCallback(callback, num) {
  setTimeout(() => {
    callback(num);
  }, 2000);
}

// Example use:
basicCallback((number) => {
  console.log(number * 2);
}, 5);
// After 2 seconds, should log: 10