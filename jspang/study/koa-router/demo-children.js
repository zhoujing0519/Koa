const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()

// 父路由
const router = new Router() 

// 子路由
const home = new Router()
const page = new Router()

// 子路由设置
home
	.get('/jspang', async ctx => {
		ctx.body = 'Home JSPang'
	})
	.get('/todo', async ctx => {
		ctx.body = 'Home Todo'
	})
page
	.get('/jspang', async ctx => {
		ctx.body = 'Page JSPang'
	})
	.get('/todo', async ctx => {
		ctx.body = 'Page Todo'
	})

// 装载子路由
router.use('/home', home.routes(), home.allowedMethods())
router.use('/page', page.routes(), page.allowedMethods())

// 装载路由
app
	.use(router.routes())
	.use(router.allowedMethods())

app.listen(3000, () => {
	console.log('app is starting at port 3000...')
})