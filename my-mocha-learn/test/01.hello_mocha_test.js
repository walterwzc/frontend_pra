var assert = require('assert')

describe('Array', function() {
    describe('#indexOf()', function() {
        it('hellw Mocha, nice to meet you~', function() {
            assert.equal('hello mocha', ['hello', 'mocha'].join(' '))
        })
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1, 2, 3].indexOf(4))
        })
    })
})


describe('Array Object', function() {
    describe('splice', function() {
        it('after splice change array, the value should be equal', function() {
            const originalArray = [1,2,3,4]
            const leftArray = originalArray.splice(1,2,9)
            assert.deepEqual(originalArray, [1,9,4])
            
        })
    })
})