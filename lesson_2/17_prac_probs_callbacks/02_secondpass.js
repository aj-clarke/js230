function downloadFile(cb) {
  console.log('Downloading file...');
  setTimeout(() => {
    console.log('Download complete!');
  }, 1500);
}

downloadFile();