setTimeout(function() {
    console.log(1)
}, 0)

new Promise(function(resolve) {
    console.log(2)
    for (var i = 0; i < 10; i++) {
        i == 9 && resolve();
    }
    console.log(3);
}).then(function() {
    console.log(4)
})

process.nextTick(function() {
    console.log(5)
})

setImmediate(function() {
    console.log(6)
})

console.log(7)

// console.log('------------------------------------')
// console.log('task begin')

// setTimeout(function() {
//     console.log('1')
// }, 0)

// Promise
//     .resolve()
//     .then(function() {
//         console.log('2')
//     })
//     .then(function() {
//         console.log('3')
//     })
    

// console.log('task end')
// console.log('------------------------------------')


