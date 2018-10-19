
const objArr = [{x: 1, y: 11}, {x: 2, y: 22}, {x: 3, y: 33}, {x: 4, y: 44}];

let result = objArr.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.x
}, 0);

console.log(result)

console.log('Test For Array -------------')

const arr = [1,2,3,4,5];
arr.attr1 = {a: 11, b:22};
arr.attr2 = {a: 11, b:22};
arr.attr3 = {a: 11, b:22};
console.log(arr)
console.log(arr.length)

for (let index in arr) {
    console.log(index)
}








