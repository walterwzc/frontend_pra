process.nextTick(function() {
    console.log('1')
})

process.nextTick(function() {
    console.log('2')
})

setImmediate(function() {
    console.log('3')
    process.nextTick(function() {
        console.log('4')
    })
})

setImmediate(function() {
    console.log('5')
})
console.log('6')
