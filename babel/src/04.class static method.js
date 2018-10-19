// import "babel-polyfill";

const set1 = new Set()
set1.add(1).add(2).add(3)

const arr = Array.from(set1)

console.log(arr.includes(2))