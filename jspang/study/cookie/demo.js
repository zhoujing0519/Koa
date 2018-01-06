const Koa = require('koa')
const app = new Koa()

/**
 * Cookie选项
 * domain 		{String} 		[cookie所在域名]
 * path 			{String} 		[cookie所在路径]
 * maxAge 		{Number} 		[cookie最大有效时长]
 * expires 		{Date} 			[cookie失效时间]
 * httpOnly 	{Boolean} 	[是否只用http请求中获得]
 * overwrite 	{Boolean} 	[是否允许重写]
 */

app.use(async ctx => {
	if(ctx.url === '/index'){
		ctx.cookies.set('name', 'JSPang', {
			domain: '127.0.0.1',
			path: '/index',
			maxAge: 1000 * 60 * 60, // 单位：ms
			expries: new Date('2018-12-31'),
			httpOnly: false,
			overwrite: false,
		})
		ctx.body = 'Cookie is seted.'
	}else{
		let cookie = ctx.cookies.get('name')
		if(cookie){
			ctx.body = cookie
		}else{
			ctx.body = 'Hello JSPang.'
		}
	}
})

app.listen(3000, () => {
	console.log('App is starting at port 3000...')
})