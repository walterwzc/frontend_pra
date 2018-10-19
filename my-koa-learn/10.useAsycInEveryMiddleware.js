const Koa = require('koa');
const app = new Koa();

const doSomething = time => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('task done!')
        }, time)
    })
}

// 用来打印请求信息
app.use(async (ctx, next) => {
    console.log(`${ctx.method}:::${ctx.url}`)
    await next()
})

app.use(async ctx => {
    const result = await doSomething(3000)
    console.log(result);
    ctx.body = result
})

app.listen(3000);

