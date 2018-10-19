const fetch = require('node-fetch')


function* gen() {
    console.log('before yield')
    yield fetch('http://api.douban.com/v2/movie/top250')
            .then(res => res.json())
            .then(result => console.log(result.subjects.length))
    console.log('after yield')
}

var gen = gen();

console.log('-----------------')
console.log('before query')
gen.next()
console.log('after query')
console.log('-----------------')

console.log('+++++++++++++++++')
console.log('before end')
gen.next()
console.log('after end')
console.log('+++++++++++++++++')