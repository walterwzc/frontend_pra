const obj = {}
var bValue = 38
Object.defineProperty(obj, 'b', {
    get: function() {
        return bValue
    },
    set: function(newValue) {
        bValue = newValue
    },
    enumerable: true,
    configurable: true,
})



console.log(obj.b)
obj.b = 11
console.log(obj.b)