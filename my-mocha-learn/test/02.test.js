function sum (...rest) {
    var sum = 0;
    for (let n of rest) {
        sum += n;
    }
    return sum;
};

const arr = [11, 22, 33, 44, 55, 66];

for (let index in arr) {
    console.log(index)
}

console.log('-------------')

for (let value of arr) {
    console.log(value)
}

console.log('-------------')

const obj = {
    1: 'aaa',
    2: 'bbb',
    3: 'ccc',
    4: 'ddd',
    length: 4
}

const objArr = Array.from(obj)

for (let key in obj) {
    console.log(key)
}

console.log('-------------')

console.log(objArr)

for (let value of objArr) {
    console.log(value)
}

// console.log(sum(1,2,3,4)) 