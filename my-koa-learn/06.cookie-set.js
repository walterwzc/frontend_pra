const koa = require('koa');

const app = new koa();


const main = ctx => {
    let count = ctx.cookies.get('count') || 0;
    ctx.response.body = `访问${count}次数`
    ctx.cookies.set('count', ++count)
}

app.use(main);

app.listen(3000, function() {
    console.log('run at 3000');
})