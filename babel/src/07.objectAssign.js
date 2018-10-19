const obj1 = {
    name: 'obj1',
    age: 18
}

const obj2 = {
    grade: 3,
    sex: 'man'
}

const combine = Object.assign({}, obj1, obj2)

console.log(combine)
