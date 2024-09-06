async function fetchResource(url) {
  try {
    const request = await fetch(url)
    const responseData = await request.json();
    console.log(responseData);  
  } catch(error) {
    console.error('Failed to load resource:', error.message)
  } finally {
    console.log('Resource fetch attempt made');
  }
}

// Example usage:
fetchResource("https://jsonplaceholder.typicode.com/todos/1");
// Logs fetched data, then "Resource fetch attempt made"
// fetchResource("invalidUrl");
// Logs "Failed to load resource", then "Resource fetch attempt made"