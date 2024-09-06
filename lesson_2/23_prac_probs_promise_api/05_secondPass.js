function loadResource(url) {
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      return 'Failed to fetch';
    });
}

loadResource("https://jsonplaceholder.typicode.com/todos/1").then(console.log);
// // Success response

// loadResource("badUrl.xyz").then(console.log);
// // Failed to fetch