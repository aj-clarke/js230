// Use the flakyService function from the last practice problem to handle errors gracefully by logging "An error occurred" in a .catch() block, instead of logging "Operation failed" directly.

// Previous Practice Problem
// function flakyService() {
//   return new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//       resolve("Operation successful");
//     } else {
//       reject("Operation failed");
//     }
//   });
// }

// MY SOLUTION Modified to handle errors
function flakyService() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Operation successful");
    } else {
      reject(new Error("Operation Failed"));
    }
  })
}

flakyService()
  .then(console.log)
  .catch(error => console.error('Error message:', error.message))



// LS SOLUTION
// Could have kept original function from lines 4 - 12 with this solution
flakyService()
  .then(console.log)
  // Logs: Operation successful
  .catch(() => console.error("An error occurred"));
// Logs: An error occurred