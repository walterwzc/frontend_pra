const fetch = require('node-fetch')


function* main(){ // 通过 Ajax 操作获取数据
    var result = yield request("http://api.douban.com/v2/movie/top250");
    var res = JSON.parse(result);

    console.log('其实是在这里书写同步代码')
    console.log(res);
    console.log('其实是在这里书写同步代码')
}

function request(url){
    fetch(url)
        .then(res => res.json())
        .then(result => {
            it.next(result.subjects.length)
        })
}
var it = main();

console.log('before')
it.next()
console.log('after')