const array = [21, 1, 23, 6, 54, 5, 78, 97, 11];


for (let i = 0; i < array.length - 1; i++) {

    let minum = array[i];
    let minumIndex = i;

    for (let j = i + 1; j < array.length; j++) {
        if (array[j] < minum) {
            minum = array[j];
            minumIndex = j;
        }
    }

    if (minumIndex !== i) {
        let temp = array[i];
        array[i] = array[minumIndex];
        array[minumIndex] = temp;
    }
}

console.log(array);


