var fetch = require('node-fetch')

function* gen() {
    var url = 'https://api.github.com/users/github'
    var result = yield fetch(url)

    console.log('before query')
    console.log(result.bio)
    console.log('after query')
}

var g = gen()
var result = g.next()

// console.log(result)

result.value
    .then(res => res.json())
    .then(result => g.next(result))
