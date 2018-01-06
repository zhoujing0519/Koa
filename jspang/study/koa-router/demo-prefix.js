const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router({
	prefix: '/jspang', // 增加层级
})

router
	.get('/', (ctx, next) => {
		ctx.body = 'Hello JSPang'
	})
	.get('/todo', (ctx, next) => {
		ctx.body = 'Todo List'
	})

app
	.use(router.routes())
	.use(router.allowedMethods())

app.listen(3000, () => {
	console.log('app is starting at port 3000...')
})