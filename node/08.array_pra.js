// 改变传入的数组，将数组中第 n(从 0 开始算 ) 个元素放到数组的开头 


const array = [1,2,3,4,5, 11,12,13,14];

// function changeArray(array, index) {
//     const leftArray = array.splice(index)
//     return leftArray.concat(array)
// }

// console.log(changeArray(array, 5))


//将数组的内容乱序
array.sort(() => {
    return Math.random() > 0.5 ? 1 : -1
})

console.log(array)















