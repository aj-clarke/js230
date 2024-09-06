const firstResource = new Promise((resolve) => {
  setTimeout(() => resolve('First Resource Loaded'), 500);
});

const secondResource = new Promise((resolve) => {
  setTimeout(() => resolve('Second resource loaded'), 1000);
});

Promise.race([firstResource, secondResource])
  .then((winnerMessage) => {
    console.log(winnerMessage);
  });