const Koa = require('koa')
const app = new Koa()

// es7 异步 async [ə'ziŋk]
app.use(async ctx => {
	ctx.body = '<div style="color: red;">Hello JSPang</div>'
});

app.listen(3000)
console.log('app is starting...')