/*
	await => async wait
	@desc 必须放在async函数中使用
 */

function getSomething(){
	return 'something'
}

async function testAsync(){
	return 'Hello async'
}

async function test(){
	const v1 = await getSomething()
	const v2 = await testAsync()

	console.log(v1, v2)
}

test()