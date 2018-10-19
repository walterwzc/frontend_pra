const array = [2, 3, 4, 1, 5, 10, 8, 9, 6, 7];


for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }    
}

console.log(array);


