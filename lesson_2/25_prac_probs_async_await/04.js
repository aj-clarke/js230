// Suppose you need to perform a sequential task: fetching a user's profile, then their posts, and then their todos. Write an async function fetchUserProfile that awaits each step, catching and logging any errors, while still ensuring that each step is attempted.

// MY Original Attempt
// async function asyncFetchResource(url) {
//   try {
//     let response = await fetch(url)
//     let data = await response.json();
//     console.log(data)
//   } catch (error) {
//     console.error(error);
//   } finally {
//     console.log('Resource fetch attempt made')
//   }
// }

// function fetchUserProfile(id) {
//   let profile = `https://jsonplaceholder.typicode.com/users/${id}`;
//   let posts = `https://jsonplaceholder.typicode.com/users/${id}/posts`;
//   let todos = `https://jsonplaceholder.typicode.com/users/${id}/todos`;

//   return Promise.allSettled([asyncFetchResource(profile),
//                              asyncFetchResource(posts),
//                              asyncFetchResource(todos)
//   ]);
// }

// Modified based off of LS solution
async function fetchUserProfile(id) {
  let profile = `https://jsonplaceholder.typicode.com/users/${id}`;
  let posts = `https://jsonplaceholder.typicode.com/users/${id}/posts`;
  let todos = `https://jsonplaceholder.typicode.com/users/${id}/todos`;
  
  try {
    let profileResponse = await fetch(profile)
    let profileData = await profileResponse.json();
    console.log('User Profile:', profileData)
  } catch (error) {
    console.error('User Profile Error:', error);
  }

  try {
    let response = await fetch(posts)
    let data = await response.json();
    console.log('User Posts:', data)
  } catch (error) {
    console.error('User Posts Error:', error);
  }

  try {
    let response = await fetch(todos)
    let data = await response.json();
    console.log('User Todos:', data)
  } catch (error) {
    console.error('User Todos Error:', error);
  }
}

// Mock API:
// GET https://jsonplaceholder.typicode.com/users/1
// GET https://jsonplaceholder.typicode.com/users/1/posts
// GET https://jsonplaceholder.typicode.com/users/1/todos

fetchUserProfile(1);

// LS SOLUTION
async function fetchUserProfile(userId) {
  try {
    const userProfile = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    ).then((res) => res.json());
    console.log("User Profile", userProfile);
  } catch (error) {
    console.error("Error fetching profile:", error);
  }

  try {
    const userPosts = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/posts`
    ).then((res) => res.json());
    console.log("User Posts", userPosts);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  try {
    const userTodos = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/todos`
    ).then(res => res.json());

    console.log("User Todos", userTodos);
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
}

// LS ADDITIONAL SOLUTION TO CATCH HTTP STATUS CODES THAT INDICATE ERRORS (I.E. 404)
try {
  const userProfile = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  ).then(res => {  
    if (!res.ok) {
      const error = new Error(res.statusText);
      error.status = res.status;
      throw error;
    }

    return res.json();
  });

  console.log("User Profile", userProfile);
} catch (error) {
  console.error("Error fetching profile:", error);
}
    