function asyncPrint(message) {
    console.log(message)
}

function pro(message, miniSecond) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            asyncPrint(message)
            resolve()
        }, miniSecond)
    })
}

async function result() {
    console.log('before')
    await pro('printMMEE', 1000)
    console.log('after')
    console.log('sync code')
}

result()


// 更加优雅的写法
function timeout(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

async function asyncPrint(value, ms) {
    await timeout(ms)
    console.log(value)
}

asyncPrint('hello world', 50)
