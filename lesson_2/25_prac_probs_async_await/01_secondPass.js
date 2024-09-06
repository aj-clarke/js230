function downloadFilePromise() {
  return new Promise((resolve, reject) => {
    console.log('Downloading File...');
  
    setTimeout(() => {
      resolve('Download Complete!');
    }, 2000)
  });
}

// async function asyncDownloadFile() {
//   try {
//     let data = await downloadFilePromise();
//     console.log(data);
//   } catch(error) {
//     console.error('An error occurred:', error)
//   }
// }

async function asyncDownloadFile() {
  try {
    let data = await new Promise((resolve, reject) => {
      console.log('Downloading File...');

      setTimeout(() => {
        resolve('Download Complete!');
      }, 2000);
    });
    console.log(data);
  } catch(error) {
    console.error('An error occurred:', error)
  }
}

asyncDownloadFile();