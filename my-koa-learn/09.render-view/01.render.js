const views = require('koa-views');

const ejs = require('ejs');

const handlebars = require('handlebars');
const path = require('path');

const Koa = require('koa');

const app = new Koa();

app.use(
    views((path.join(__dirname, './views')), {
        map: {
            hbs: 'handlebars',
            ejs: 'ejs'
        }
    })
);

app.use(async ctx => {
    // console.log(this)
    // console.log(ctx)
    await ctx.render('index.hbs', {
        title: 'this is rendering'
    })
});

app.listen(3000, function() {
    console.log('3000');
})
















