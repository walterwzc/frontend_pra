const array = [21, 1, 23, 6, 54, 5, 78, 97, 11];


let step = parseInt(array.length / 2, 10);


while (step >= 1) {

    for (let i = step; i < array.length; i++) {
        let pivot = i;
        let middle = 0;

        while (array[pivot - step] > array[pivot] && pivot >= 0) {
            middle = array[pivot - step];
            array[pivot - step] = array[pivot];
            array[pivot] = middle;

            pivot -= step;
        }
    }

    step = parseInt(step / 2, 10);
}

console.log(array);


