const Koa = require('koa');



const app = new Koa();

app.use(async (ctx, next) => {
    const startTime = new Date().getTime()
    await next()
    const endTime = new Date().getTime()
    console.log(`method: ${ctx.method}, url: ${ctx.url}, URL: ${ctx.URL}, ms: ${startTime - endTime}`)
})

app.use(async (ctx, next) => {
    ctx.body = 'Hello, Koa middleware'
    await next()
})


app.listen(4000)