// function* gen() {
//     yield 'hello'
//     yield 'generator'
//     return 'nice to meet you!!~'
// }

// var gen = gen()

// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

function* demo() {
    console.log('Hello' + (yield)) // OK
    console.log('Hello' + (yield 123)) // OK
}

var demo = demo()
console.log(demo.next())
console.log(demo.next())
console.log(demo.next())