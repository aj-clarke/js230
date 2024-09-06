// Create an async function fetchResource that receives a URL, attempts to fetch the resource, and logs the JSON response. If an error occurs during fetching, the function should log "Failed to load resource". Regardless of success or failure, confirm that the resource was attempted by logging "Resource fetch attempt made".

async function asyncFetchResource(url) {
  try {
    let response = await fetch(url) // returns promise object;
    let data = await response.json();
    console.log(data)
  } catch (error) {
    console.error(error);
  } finally {
    console.log('Resource fetch attempt made')
  }
}

// Example usage:
asyncFetchResource("https://jsonplaceholder.typicode.com/todos/1");
// Logs fetched data, then "Resource fetch attempt made"
asyncFetchResource("invalidUrl");
// Logs "Failed to load resource", then "Resource fetch attempt made"