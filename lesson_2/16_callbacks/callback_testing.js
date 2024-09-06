function getData(cb) {
  setTimeout(() => {
    const data = [1];
    console.log(data);            // output [1]
    cb(data);
  }, 2000);
}

function getMoreData(data, cb) { // [1] and callback from 18-22 // [1, 2] and cb 19 - 21
  setTimeout(() => {
    data.push(data[data.length - 1] + 1); // [1, 2] // [1, 2, 3]
    console.log(data);                    // output [1, 2] // output [1, 2, 3]
    cb(data);
  }, 3000);
}

// getData(function (a) {              // passing into anonymous func => [1]
//   getMoreData(a, function (b) {     // passing into anonymous func => [1, 2]
//     getMoreData(b, function (c) {   // passing into anonymous func => [1, 2, 3]
//       console.log("Got the data!"); // output 'Got the Data!'
//     });
//   });
// });


function getFinalData(c) {
  console.log("Got the data!");
}

function processMoreData(b, callback) {
  getMoreData(b, callback);
}

function processData(callback) {
  getData(function (a) {
    processMoreData(a, callback);
  });
}

processData(getFinalData);