async function fetchUserProfile(userId) {
  const profile = `https://jsonplaceholder.typicode.com/users/${userId}`;
  const posts = `https://jsonplaceholder.typicode.com/users/${userId}/posts`;
  const todos = `https://jsonplaceholder.typicode.com/users/${userId}/todos`;
  const userResources = [profile, posts, todos];
  
  userResources.forEach(resource => {
    response = parseResponse(resource);
  });
}

async function parseResponse(resource) {
  try {
    const request = await fetch(resource);
    const response = await request.json();
    console.log(response);
  } catch(error) {
    console.error('An error has occurred:', error.message);
  }
}

fetchUserProfile(1);