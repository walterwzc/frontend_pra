
function duplicates(arr) {
    const dupArr = [];
    arr.sort(function(num1, num2) {
        return num1 - num2;
    });
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === arr[i + 1] && dupArr.indexOf(arr[i]) === -1) {
            dupArr.push(arr[i]);
        }
    }
    return dupArr;
}


console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]));