const Assert = require('assert');

describe('each test', function() {
    describe('#sum()', function() {
        before(function() {
            console.log('before')
        })
        after(function() {
            console.log('after')
        })
        beforeEach(function() {
            console.log('beforeEach print')
        })
        afterEach(function() {
            console.log('afterEach print')
        })
        it('sum 1 + 1', function() {
            Assert.equal(1+1, 2)
        })
        it('sum 2 + 2', function() {
            Assert.equal(2+2, 4)
        })
    })
})