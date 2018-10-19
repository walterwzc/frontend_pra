
const array = [21, 1, 23, 6, 54, 5, 78, 97, 11];

const sortedArr = [];

array.forEach(function(item) {
    sortedArr[item] = item;
});

const result = Object.values(sortedArr);

const result2 = Object.keys(sortedArr);

console.log(result);
console.log(result2);








