async function fetchMultipleData() {
  try {
    // parallel assignment used
    let [firstData, secondData] = await Promise.all([fetchFirst(), fetchSecond()]);
    console.log(firstData, secondData);
  } catch (error) {
    console.error('An error has occurred:', error);
  }
}