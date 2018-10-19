Array.prototype.map = function(projectionFunction) {
	var results = [];
	this.forEach(function(itemInArray) {

		// ------------ 在这里写下答案 ----------------------------
		// 对数组中的每一个元素使用 projectionFunction 方法，并把结果放到
		// 一个数组里面。
		// 注意: 你可以使用 push() 方法把元素放到数组中。
        // ------------ 在这里写下答案 ----------------------------
        const one = projectionFunction.call(null, itemInArray);
        console.log(one);
		results.push(one);
	});
	
	return results;
};

console.log(JSON.stringify([1,2,3].map(function(x) { return x + 1; })) === '[2,3,4]')


// const result = [1,2,3].map(function(item) {
//     return item * item;
// });

// console.log(result);
