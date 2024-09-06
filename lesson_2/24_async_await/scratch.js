// async function fetchData() {
//   return "data from server";
// }

// fetchData().then((data) => console.log(data));
// // outputs: data from server

// async function fetchData() {
//   try {
//     let data = await someAsynchronousOperation();
//     console.log(data);
//   } catch (error) {
//     console.error('Ooops an error occurred:', error.message);
//   }
// }

// function someAsynchronousOperation() {
//   throw new Error('aahhh');
// };

// fetchData();

async function fetchMultipleData() {
  try {
    let [firstData, SecondData] = await Promise.all([
      fetchFirst(),
      fetchSecond(),
    ]);
    console.log(firstData, SecondData);
  } catch (error) {
    console.error('An error occurred while fetching data:', error); // or error.message if an Error object
  }
}