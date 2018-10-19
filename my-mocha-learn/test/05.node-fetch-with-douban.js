const fetch = require('node-fetch')
const Assert = require('assert')


describe('test with douban API', function(){
    it('the default count of result are 20', function(done) {
        fetch('http://api.douban.com/v2/movie/top250')
            .then(res => res.json())
            .then(result => {
                Assert.equal(result.subjects.length, 20)
                done();
            })
    })

    it('use asyc and await to test', async function() {
        await fetch('http://api.douban.com/v2/movie/top250')
            .then(res => res.json())
            .then(result => {
                Assert.equal(result.subjects.length, 20)
            })
    })
})











