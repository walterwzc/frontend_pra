// function mySetinterval(fn, TIMEOUT) {
//     setTimeout(function() {
//         fn();
//         mySetinterval(fn, TIMEOUT)
//     }, TIMEOUT);
// }

// mySetinterval(function() {
//     console.log('hello');
// }, 1000);


var mySetInterval = function(fn, time) {
    // 定义一个递归函数，持续调用定时器
    setTimeout(function() {
        fn();
        mySetInterval(fn, time);
    }, time);
};

mySetInterval(function() {
    console.log('run');
}, 1000);