let makeFood = new Promise((resolve, reject) => {
  console.log('Prepping and cooking food!')
  setTimeout(() => {
    resolve('Food is ready, time to eat!')
  }, 1000);
})

makeFood
  .then((foodsReady) => {
    setTimeout(() => {
      console.log(foodsReady);
    }, 2000);
  })
  .finally(() => {
    setTimeout(() => {
      console.log('Time to clean up and do the dishes!!!');
    }, 4000);
  });