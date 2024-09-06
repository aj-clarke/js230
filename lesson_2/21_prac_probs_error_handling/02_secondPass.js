function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject({ error: "User not found" }), 500);
  });
}

fetchUserData()
  .catch((failureMessage) => {
    console.error(failureMessage.error);
  })
  .finally(() => {
    console.log('Fetching Complete');
  });