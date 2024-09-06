async function fetchData() {
  let data = await someAsynchronousOperation();
  // The function waits here until the operation completes

  // operation completes, and function resumes execution
  console.log(data)
  // `data` is logged
}