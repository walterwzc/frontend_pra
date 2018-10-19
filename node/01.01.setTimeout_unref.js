var timer = setInterval(function () {
	console.log(new Date, 1)
}, 1000)


var timer2 = setInterval(function () {
	console.log(new Date, 2)
}, 1000)

timer.unref()
// timer2.unref()