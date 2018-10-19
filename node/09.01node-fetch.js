const fetch = require('node-fetch');

const fs = require('fs')


const picPromise = fetch('https://assets-cdn.github.com/images/modules/logos_page/Octocat.png')
    .then(res => new Promise((resolve, reject) => {
        console.log('-------------')
        console.log(res)
        console.log('-------------')
        const writeStream = fs.createWriteStream('./githubcat.png');
        res.body.pipe(writeStream);
        res.body.on('error', function(error) {
            console.log('error in res');
            reject(error);
        });
        writeStream.on('finish', () => {
            console.log('finished');
            resolve('write stream is finished')
        })
        writeStream.on('error', () => {
            console.log('error in writeStream');
            reject()
        })
    }))


picPromise
    .then(message => console.log(message))
    .catch(error => console.log(error))