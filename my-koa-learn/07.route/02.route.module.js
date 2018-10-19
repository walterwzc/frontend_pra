
const Route = require('koa-router');

const Koa = require('koa');

const app = new Koa();

const home = new Route();

home.get('/', ctx => {
    ctx.body = {
        url: ctx.url,
        method: ctx.method,
        param: ctx
    }
})

const student = new Route();

student.get('/signin', function(ctx) {
    ctx.response.body = 'user signin';
}).get('/signup', function(ctx) {
    ctx.response.body = 'user signup';
});

const router = new Route();

router.use('/home', home.routes());

router.use('/student', student.routes());

app.use(router.routes());

app.listen(3000, function() {
    console.log(3000)
})








