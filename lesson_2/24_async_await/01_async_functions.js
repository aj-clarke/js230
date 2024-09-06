async function fetchData() {
  return 'data from server';
}

fetchData().then((data) => console.log(data));
fetchData().then(console.log);

// 5 and 6 output: 'data from server'