function startCounter(callback) {
  currentCount = 0;

  const countStopId = setInterval(() => {
    currentCount += 1;
    const returnVal = callback(currentCount);

    if (returnVal) clearInterval(countStopId);
  }, 1000);
}

startCounter((count) => {
  console.log(count);
  return count === 5;
});
