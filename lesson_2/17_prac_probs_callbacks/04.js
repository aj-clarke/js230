// Build a function waterfallOverCallbacks that chains the execution of multiple callbacks. This function should take an array of callbacks that each take a single numerical argument. Each callback should multiply the number by 2 and then the main function should pass it to the next callback in the array. Log the result after the last callback executes.

function waterfallOverCallbacks(callbackArr, num) {
  for (let i = 0; i < callbackArr.length; i++) {
    num = callbackArr[i](num);
  }

  console.log(num);
}

const double = (x) => x * 2;
waterfallOverCallbacks([double, double, double], 1);
// Should log 8