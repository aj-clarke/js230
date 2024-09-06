// Rewrite the loadData function using async/await, making sure to handle both the success scenario (console.log) and the error scenario (console.error).

async function asyncLoadData() {
  try {
    let data = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve("Data loaded");
        } else {
          reject('Network Error')
        }
      }, 1000);
    });
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

asyncLoadData();
