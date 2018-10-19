const obj = {
    // allNum: [],
    allNum: [123, 456, 789],
    get latestNum() {
        if (this.allNum.length === 0) {
            console.log('there are no numbers')
            return
        } else {
            return this.allNum[this.allNum.length - 1]
        }
    }
}

Object.defineProperty(obj, 'getFirstNum', {
    get: function() {
        return this.allNum[0]
    }
})

console.log(obj.getFirstNum)

console.log(obj.latestNum)
