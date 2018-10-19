function insert(arr, item, index) {
    var newArr = arr.slice();
    newArr.splice(index, 0, item);
    return newArr
}


console.log(insert([1, 2, 3, 4], 'z', 2));