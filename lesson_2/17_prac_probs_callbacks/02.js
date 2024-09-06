// Create a function downloadFile that simulates downloading a file by logging "Downloading file...". After a delay of 1.5 seconds, it should call the callback with the argument "Download complete!".

function downloadFile(callback, message) {
  console.log('Downloading file...');
  setTimeout(() => {
    callback('Download Complete!');
  }, 1500);
}

downloadFile(((message) => {
  console.log(message);
}))