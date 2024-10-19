//Get request using fetch

// fetch('https://jsonplaceholder.typicode.com/posts/2')
//   .then(response => response.json())
//   .then(data => console.log(data.id));

// //Post request using fetch

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8'
//     }
//   })
//     .then(response => response.json())
//     .then(data => console.log(data));

//Put request using fetch

// fetch('https://jsonplaceholder.typicode.com/posts/1', {
//     method: 'PUT',
//     body: JSON.stringify({
//       id: 1,
//       title: 'foo',
//       body: 'bar',
//       userId: 1
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8'
//     }
//   })
//     .then(response => response.json())
//     .then(data => console.log(data));

// //Delete request using fetch

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
  })
    .then(response => response.json())
    .then(data => console.log(data));
