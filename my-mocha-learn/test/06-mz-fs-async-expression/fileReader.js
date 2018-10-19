const fs = require('mz/fs');

async function readFile () {
    const expression = await fs.readFile('express.txt')
    const expressFun = new Function('return ' + expression)
    const result = expressFun()
    console.log(`${expression} => the result is ${result}`)
    return result;
}

module.exports = readFile