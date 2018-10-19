
function concatSorted(arr1, arr2) {
    const shortArr = arr1.length > arr2.length ? arr2 : arr1;
    const longArr = shortArr === arr1 ? arr2: arr1;
    let nowInserted = 0;

    while(shortArr.length) {
        nowInserted = shortArr.shift();
        for (let i = 0; i < longArr.length; i++) {
            if (nowInserted < longArr[i] && i === 0) {
                longArr.unshift(nowInserted);
                i--;
                continue;
            } else if (nowInserted > longArr[i] && nowInserted > longArr[i + 1]) {
                continue;
            } else if (nowInserted > longArr[i] && nowInserted < longArr[i + 1]) {
                longArr.splice(i + 1, 0, nowInserted);
                break;
            } else if (nowInserted > longArr[i] && longArr[i + 1] === undefined) {
                longArr.push(nowInserted);
            }
        }
    }
    return longArr;
}

// const A = [1,3,5,7,9,15,17,19];
// const B = [2,4,6,8,13];

// const A = [1, 3, 5, 7, 9];
// const B = [12, 23, 34];

const A = [1, 3, 5, 7, 9];
const B = [12, 23, 34, 54, 75, 90];

const sortedArr = concatSorted(A, B);
console.log(sortedArr);
