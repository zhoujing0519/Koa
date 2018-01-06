const Koa = require('koa')
const fs = require('fs')
const app = new Koa()

/**
 * 路由切换
 * @param  {String} url 
 * @return {String}    
 */
async function route(url){
	let page = '404.html'
	let html = ''

	switch(url){
		case '/':
			page = 'index.html'
			break
		case '/index':
			page = 'index.html'
			break
		case '/todo':
			page = 'todo.html'
			break
		case '/404':
			page = '404.html'
			break
		default:
			break
	}

	html = await render(page)

	return html
}

/**
 * 获取html内容
 * @param  {String} page
 * @return {Promise}
 */
async function render(page){
	return new Promise((resolve, reject) => {
		let pageUrl = `../page/${page}`

		// binary => 二进制
		fs.readFile(pageUrl, 'binary', (err, data) => {
			if(err){
				reject(err)
			}else{
				resolve(data)
			}
		})
	})
}

app.use(async ctx => {
	const url = ctx.request.url
	let html = await route(url)

	ctx.body = html
})

app.listen(3000, () => {
	console.log('app is starting at port 3000...')
})