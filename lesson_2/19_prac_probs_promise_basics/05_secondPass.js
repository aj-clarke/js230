let chain = new Promise((resolve, reject) => {
  resolve(7);
})

chain
  .then((result) => {
    return result * 2;
  })
  .then((result) => {
    const finalValue = result + 5
    console.log(finalValue);
  });