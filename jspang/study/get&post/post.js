const Koa = require('koa')
const app = new Koa()

// Functions
	/**
	 * 转换POST数据
	 * @param  {Object} ctx 
	 * @return {Promise}     
	 */
	function parsePostData(ctx){
		return new Promise((resolve, reject) => {
			try{
				let postData = ''

				// 监听data事件[原生方法]
				ctx.req.addListener('data', data => {
					postData += data
				})

				// 监听end事件[koa方法]
				ctx.req.on('end', () => {
					resolve(parseQueryString(postData))
				})
			}catch(err){
				reject(err)
			}
		})
	}

	/**
	 * 将POST发送的数据转化为JSON对象
	 * @param  {String} queryString
	 * @return {Object}             
	 */
	function parseQueryString(queryString){
		let queryData = {}
		let queryList = queryString.split('&')

		for(let [index, queryString] of queryList.entries()){
			let itemList = queryString.split('=')

			queryData[itemList[0]] = decodeURIComponent(itemList[1]); // 解码
		}

		return queryData
	}

// Initialization
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
			let postData = await parsePostData(ctx)
			ctx.body = postData
		}else{
			ctx.body = '<h1>404 NOT FOUND</h1>'
		}
	})

	app.listen(3000, () => {
		console.log('app is starting at port 3000...')
	})