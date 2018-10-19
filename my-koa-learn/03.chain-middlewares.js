const Koa = require('koa')

const app = new Koa()


app.use(async function(ctx, next) {
    console.log(1)
    ctx.body = '1'
    await next()
    ctx.body = '6'
    console.log(6)
})

app.use(async function(ctx, next) {
    console.log(2)
    ctx.body = '2'
    await next()
    ctx.body = '5'
    console.log(5)
})

app.use(async function(ctx, next) {
    console.log(3)
    ctx.body = '3'
    await next()
    ctx.body = '4'
    console.log(4)
})


app.listen(4000)





