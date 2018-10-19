const array = [21, 1, 23, 6, 54, 5, 78, 97, 11];


for (let i = 1; i < array.length; i++) {
    let pivot = i;
    let middle = 0
    while (array[pivot - 1] > array[pivot] && pivot >=0) {
        middle = array[pivot - 1];
        array[pivot - 1] = array[pivot];
        array[pivot] = middle;
        pivot--;
    }
}

console.log(array);