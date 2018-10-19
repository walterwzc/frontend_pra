const Koa = require('koa');


const app = new Koa()

app.use(ctx => {
    ctx.body = "Hello Koa! Nice to meet you!!!~"
})

app.listen(4000)