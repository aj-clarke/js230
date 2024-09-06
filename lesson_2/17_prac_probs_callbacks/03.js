// Write a function processData that takes in two parameters: an array of numbers and a callback function. This function should use setTimeout to simulate a time-consuming computation by waiting 1 second. After the delay, it should apply the callback to each number in the array, and then log the new array.

function processData(arr, callback) {
  setTimeout(() => {
    let newArr = arr.map(callback);
    console.log(newArr);
  }, 1000)
}

processData([1, 2, 3], (number) => number * 2);