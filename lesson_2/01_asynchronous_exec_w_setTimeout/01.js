function delayLog() {
  for (let i = 1; i <= 10; i++) {
    logNum(i);
  }
}

function logNum(num) {
  setTimeout(() => {
    console.log(num);
  }, (num * 1000))
}

delayLog();


// LS SOLUTION

function makeLogger(number) {
  return function() {
    console.log(number);
  }
}

function delayLog() {
  for (let index = 1; index <= 10; index += 1) {
    let logger = makeLogger(index);
    setTimeout(logger, index * 1000);
  }
}