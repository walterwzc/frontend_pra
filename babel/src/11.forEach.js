const arr = [1,2,3,4,5,6]

arr.forEach((item, index) => {
    console.log(item, index)
})


const newArr = arr.map(function(item, index) {
    return item * 2
})

console.log(newArr)