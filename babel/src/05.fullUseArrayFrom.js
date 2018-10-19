let diObj = {
    handle: function(n) {
        return n + 2
    }
}

const result = Array.from(
    [1, 2, 3, 4, 5],
    function(x) {
        return this.handle(x)
    },
    diObj
)

console.log(result)
