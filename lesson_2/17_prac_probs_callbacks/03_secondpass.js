function processData(numArr, cb) {
  setTimeout(() => {
    const processedData = numArr.map(num => {
      return cb(num);
    });

    console.log(processedData);
  }, 1000)
}

processData([1, 2, 3], (number) => number * 2);