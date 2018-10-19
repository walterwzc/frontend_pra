
const expressionResult = require('./fileReader');
const Assert = require('assert');

describe('file reader', function() {
    it('expression result', async function() {
        Assert.equal(await expressionResult(), 15)
    })
})


