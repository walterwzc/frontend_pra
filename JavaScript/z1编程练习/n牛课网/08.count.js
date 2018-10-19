function count(arr, item) {
    var count = 0;
    arr.forEach(function(one) {
        if (one === item) {
            count++;
        }
    });
    return count;
}