function remove(arr, item) {
    return arr.filter((one) => one != item);
}

const arr = [1, 2, 3, 4, 2,2,3,4,5,2,2];

console.log(remove(arr, 2));

console.log(arr);


