const route = require('koa-route');

const koa = require('koa');

const indexPage = ctx => {
    ctx.response.type = 'html';
    ctx.response.body = 'this is index page'
}

const aboutPage = ctx => {
    ctx.response.body = '<h2>this is about page</h2>'
}

const app = new koa();

app.use(route.get('/', indexPage))
app.use(route.get('/about', aboutPage))

app.listen(3000, function() {
    console.log('the server is started at 3000')
})


