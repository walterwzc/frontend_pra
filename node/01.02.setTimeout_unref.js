console.log('process begin')

function intervalF1(date) {
    console.log('The time of setInterval load is ' + date)
}
//每个1000S执行一次
var timeout1 = setTimeout(intervalF1, 4000, new Date().getTime())


timeout1.unref()


// setTimeout(function() {
//     console.log('3000s stop timeout1 of setInterval.')
// }, 2000)


// setTimeout(function() {
//     // timeout1.ref()
//     console.log('6000s start timeout1 of setInterval.')
// }, 6000)
