// Convert the downloadFilePromise function you saw previously to an asynchronous function named asyncDownloadFile. Utilize await to pause execution until the file download completes before logging the success message.

async function asyncDownloadFile() {
  console.log("Downloading file...");

  const result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("Download complete!");
    }, 1500);
  });

  console.log(result);
}

asyncDownloadFile();