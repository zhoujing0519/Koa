const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
	const {url, request} = ctx
	
	// 从request中接收get请求
	const {query, querystring} = request

	// 从上下文中直接获取get请求
	// const {query, querystring} = ctx

	ctx.body = {
		url,
		query,
		querystring
	}
})

app.listen(3000, () => {
	console.log('app is starting at port 3000...')
})