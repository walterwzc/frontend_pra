const Asser = require('assert')

describe('asyc', function() {
    it('asyc test', function(done) {
        const time = function() {
            let flag = false;
            Asser.notEqual(flag, true)
            done();
        }

        setTimeout(time, 2000)
    })
})