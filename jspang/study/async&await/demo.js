// 模拟异步
function takeLongTime(){
	return new Promise(resolve => {
		setTimeout(() => resolve('long_time_value'), 3000)
	})
}

// 异步函数
async function test(){
	const v = await takeLongTime()

	console.log(v)
}

test() // test是一个异步函数
console.log(1) // console会优先执行