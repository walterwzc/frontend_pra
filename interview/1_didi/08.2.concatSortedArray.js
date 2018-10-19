
// http://xuhong.github.io/2014/04/01/concatsort/

function concatSorted(arr1, arr2) {
    const sortedArr = [];
    while (arr1.length && arr2.length) {
        if (arr1[0] < arr2[0]) {
            sortedArr.push(arr1.shift());
        } else {
            sortedArr.push(arr2.shift());
        }
    }
    return sortedArr.concat(arr1).concat(arr2);
}

const A = [1,3,5,7,9,15,17,19];
const B = [2,4,6,8,13];

// const A = [1, 3, 5, 7, 9];
// const B = [12, 23, 34];

// const A = [1, 3, 5, 7, 9];
// const B = [12, 23, 34, 54, 75, 90];

const sortedArr = concatSorted(A, B);
console.log(sortedArr);


