const obj = {
    nameArr: [],
    set recordName(name) {
        this.nameArr.push(name)
    }
}

Object.defineProperty(obj, 'ageArr', {
    enumerable: true,
    configurable: true,
    writable: true,
    value: []
})


Object.defineProperty(obj, 'recordAge', {
    enumerable: true,
    configurable: true,
    set: function(age) {
        this.ageArr.push(age)
    }
})

obj.recordName = 'AAA'
obj.recordName = 'BBB'

obj.recordAge = 18
obj.recordAge = 20

console.log(obj.nameArr)
console.log(obj.ageArr)
