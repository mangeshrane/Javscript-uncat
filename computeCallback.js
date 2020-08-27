
function compute(arr, callback) {
    return callback(arr);
}

const result = compute([1, 2, 3], (arr) => {
    let cnt = 0;
    arr.forEach(element => {
        cnt += element;
    });
    return cnt
});

console.log("Result is %d", result);
