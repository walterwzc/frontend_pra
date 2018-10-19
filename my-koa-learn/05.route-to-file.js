
// const fs = require('fs.promised');

const fs = require('fs');

const koa = require('koa');

// 可以使用
// const main = async ctx => {
//     ctx.response.type = 'html';
//     ctx.response.body = await fs.readFile('./tempate/hello.html');
// }

const main = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = fs.readFileSync('./tempate/hello.html');
}

const app = new koa();

app.use(main);

app.listen(3000, function() {
    console.log('the server is at 3000')
})







