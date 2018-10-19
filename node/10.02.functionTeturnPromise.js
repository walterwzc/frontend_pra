function sync() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('setTimeout is over.')
            Math.random() > 0.5 ? resolve(1) : resolve(-1)
            console.log('promise is over, now return ')
        }, 2000)
    }).then(result => {
        console.log(1)
        console.log(result)
        return result
    }).then(result2 => {
        console.log(2)
        console.log(result2)
        return result2
    })
}

// async function getAwaitResult() {
//     const result = await sync()
//     console.log('wait for the result is: ' + result)
// }

// getAwaitResult()


function getPromsieResult() {
    sync().then(function(result) {
        console.log(3)
        console.log('result is: ' + result)
    }).then(function(result2) {
        console.log(4)
        console.log('result2 is: ' + result2)
    })
}

getPromsieResult()
