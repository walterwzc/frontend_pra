// 删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组


function truncate(arr) {
    const newArr = arr.slice();
    newArr.pop();
    return newArr;
}