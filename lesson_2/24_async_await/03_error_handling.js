async function fetchData() {
  try {
    let data = await someAsynchronousOperation();
    console.log(data);
  } catch (error) {
    console.error('Oops, an error occurred:', error);
  }
}