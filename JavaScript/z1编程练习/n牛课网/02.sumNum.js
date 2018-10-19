// function sum(arr) {
//     return arr.reduce((prev, cur, index) => prev + cur);
// }

function sum(arr){
    var sum=0;
    arr.forEach(function(item){
        sum+=item;
    })
    return sum;
}

console.log(sum([ 1, 2, 3, 4 ]));