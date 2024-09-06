// function downloadFile(cb) {
//   console.log('Downloading file...');
//   setTimeout(() => {
//     console.log('Download complete!');
//   }, 1500);
// }

// downloadFile();

function downloadFilePromise() {
  return new Promise((resolve, reject) => {
    console.log('Downloading File...');
  
    setTimeout(() => {
      resolve('Download Complete!');
    }, 2000)
  });
}

// let downloadFilePromise = new Promise((resolve, reject) => {
//   console.log('Downloading File...');

//   setTimeout(() => {
//     resolve('Download Complete!');
//   }, 2000)
// })

downloadFilePromise()
  .then(successMessage => console.log(successMessage));