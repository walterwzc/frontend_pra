const Koa = require('koa')
const app = new Koa()

const session = require('koa-session-minimal')
const MysqlStore = require('koa-mysql-session')
const Router = require('koa-router')

const config = {
    user: 'root',
    password: '123',
    database: 'koasession',
    host: 'localhost'
}

app.use(
    session({
        key: 'SESSION_ID',
        store: new MysqlStore(config),
        cookie: {
            maxAge: 60 * 60 * 24
        }
    })
)

const user = new Router()

user.get('/signin', ctx => {
    if (ctx.session.username) {
        // ctx.body = '用户已经登录.'
        ctx.body = ctx.session.username + ' the username exists in session'
    } else {
        // 获得前端的用户名和密码，做完数据库比对后，成功：
        ctx.session = {
            username: 'jiazhi'
        }
        ctx.body = ctx.session.username + 'the username do not exist, put it in mysql session'
    }
})
    .get('/getlist', ctx => {
        ctx.body = 'list'
    })
    .get('/signup', ctx => {
        ctx.body = 'signup'
    })

const router = new Router()
router.use('/api', user.routes())

app.use(router.routes())

app.use(async ctx => {})

app.listen(3000, () => {
    console.log('localhost:3000')
})
