// Consider the function startCounter that accepts a callback. It should use setInterval to call the callback every second, incrementing and logging a counter variable each time. Also, provide a way for the callback to stop the counter after reaching a specified value.

function startCounter(callback) {
  let count = 1
  let cancelId = setInterval(() => {    // should start using const for variables like this
    let result = callback(count);
    if (result) clearInterval(cancelId);
    count++
  }, 1000);
}

startCounter((count) => {
  console.log(count);
  return count === 5;
});

// LS SOLUTION (pretty much the same)
function startCounter(callback) {
  let counter = 0;
  const intervalId = setInterval(() => {
    counter++;
    if (callback(counter)) {
      clearInterval(intervalId);
    }
  }, 1000);
}