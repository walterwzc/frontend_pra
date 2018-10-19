const array = [21, 1, 23, 6, 54, 5, 78, 97, 11];

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middleIndex = Math.floor(arr.length / 2);
    const middleNum = arr[middleIndex];

    const leftArr = [];
    const rightArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < middleNum) {
            leftArr.push(arr[i]);
        } 
        
        if (arr[i] > middleNum){
            rightArr.push(arr[i]);
        }
    }

    return quickSort(leftArr).concat([middleNum]).concat(quickSort(rightArr));
}


console.log(quickSort(array));
