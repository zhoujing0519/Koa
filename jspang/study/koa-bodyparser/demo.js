const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const app = new Koa()


// Initialization
	app.use(bodyparser()) // 使用bodyparser

	app.use(async ctx => {
		if(ctx.url === '/' && ctx.method === 'GET'){
			// 显示表单页面
			let html = `
				<h1>JSPang Koa2 request POST</h1>
				<form method="POST" action="/">
					<p>Username:</p>
					<input name="username" />
					<p>Age:</p>
					<input name="age" />
					<p>Website:</p>
					<input name="website" />
					<p><button type="submit">提交</button></p>
				</form>
			`
			ctx.body = html
		}else if(ctx.url === '/' && ctx.method === 'POST'){
			// 接收参数
			let postData = ctx.request.body // bodyparser将数据传到了ctx.request.body中

			ctx.body = postData
		}else{
			ctx.body = '<h1>404 NOT FOUND</h1>'
		}
	})

	app.listen(3000, () => {
		console.log('app is starting at port 3000...')
	})