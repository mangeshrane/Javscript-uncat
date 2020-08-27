

const fs = require('fs');
const request = require('request');
const url = 'https://jsonplaceholder.typicode.com/posts/2';

request.get(url, handleResponse);
request.get(url);

function handleResponse(err, resp, body) {
    console.log("inside handle response");
    if (err) throw new Error;
    const post = JSON.parse(body);
    const title = post.title;
    fs.readFile('./file.txt', 'utf-8', readFile(title));
}
const readFile = title => (err, content) => {
    console.log("inside read file");
    if (err) throw new Error(err);
    const result = title + content;
    fs.writeFile('./result.txt', result, writeResult);
}
function writeResult(err) {
    console.log("inside Write file");
    if (err) throw new Error(err);
    console.log('done');
}