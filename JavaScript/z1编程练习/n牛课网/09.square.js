function square(arr) {
    return arr.map(function(item) {
        return item * item; 
    });
}



console.log(square([1, 2, 3, 4]));