let countId;

function startCounting() {
  let count = 1;
  countId = setInterval(() => {
    console.log(count);
    count += 1;
  }, 1000)
}

startCounting();

clearInterval(countId);