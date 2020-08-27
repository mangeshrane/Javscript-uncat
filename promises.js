// const myPromise = new Promise(function(resolve, reject) {
//     if(error) {
//       reject(new Error(error));
//     } else {
//       resolve('ok');
//     }
//   });

//   myPromise
//   .then(function(result) {
//     console.log(result);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });

const fs = require('fs');
function readFile(file, format = 'utf-8') {
  return new Promise((resolve, reject) => {
    fs.readFile(file, format, (err, content) => {
      if(err) return reject(err);
      resolve(content);
    });
  });
}

readFile('./result.txt')
  .then(content => console.log(content))
  .catch(err => console.log(err));


const axios = require('axios'); // A
function getDataFromServer() {
  const result = axios.get('https://jsonplaceholder.typicode.com/posts/1'); // B
  return result; // C
}

getDataFromServer()
  .then(function(response) {
    console.log("title : %s", response.data["title"]);
  })
  .catch(function(error) {
    console.log(error);
  });