function* f() {
    console.log('enter function')
    for (var i = 0; true; i++) {
        console.log('before yield')
        var reset = yield i;
        console.log('after yield')
        if (reset) {
            console.log('reset')
            i = -1;
        } else {
            console.log('not reset')
        }
    }
    console.log('get out of function')
}

const g = f();

console.log('---------------')
console.log(g.next())
console.log('---------------')
console.log(g.next())
console.log('---------------')
console.log(g.next())
console.log('---------------')

console.log('*****************************')
console.log(g.next(true))
console.log('*****************************')
console.log(g.next(false))
console.log('*****************************')

console.log('===============')
console.log(g.next())
console.log('===============')
console.log(g.next())
console.log('===============')
console.log(g.next())
console.log('===============')



