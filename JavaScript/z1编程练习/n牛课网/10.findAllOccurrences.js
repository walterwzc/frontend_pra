function findAllOccurrences(arr, target) {
    var curr = [];
    arr.forEach(function(item, index) {
        if (item === target) {
            curr.push(index);
        }
    });
    return curr;
}

console.log(findAllOccurrences('abcdefabc', 'a'));


console.log('abc'.split(''));