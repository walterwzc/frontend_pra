
const map1 = new Map()

map1
    .set('1', 'aaa')
    .set('2', 'bbb')
    .set('3', 'ccc')
    .set('4', 'ddd')

console.log(map1)

map1.forEach(function(key, value, map) {
    console.log(key, value, map)
})

const filterMap = new Map([...map1].filter(([key, value]) => key > 2))
console.log(filterMap)



