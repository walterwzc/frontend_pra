const Koa = require('koa');

const fs = require('fs');

const app = new Koa();

const readFile = function (fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(`./views/${fileName}`, 'utf-8', function(err, data) {
            if (err) {
                reject(err);
            }
            resolve(data)
        })
    });
}

const main = async ctx => {
    let responseData = null;
    console.log(ctx);
    switch (ctx.url) {
        case '/':
            responseData = await readFile('index.html');
            break;
        default:
            responseData = await readFile('404.html');
            break;
    }
    ctx.response.body = responseData;
}

app.use(main);
app.listen(3000, function() {
    console.log(3000);
})