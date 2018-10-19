
// function* gen(num) {
//     num = num + 1;
//     num = yield num + 2;
//     mun = yield num + 3;
//     return num;
// }

// const genResult = gen(12);

// console.log(genResult.next())
// console.log(genResult.next())
// console.log(genResult.next())
// console.log(genResult.next())



function* ticketGenerator(){
    yield 1;
    yield 2;
    yield 3;
}   

const gen = ticketGenerator()

let result = null;
// while(result = gen.next()) {
//     console.log(result)
// }

// for(result = gen.next(); !result.done; result = gen.next()) {
//     console.log(result)
// }


result = gen.next()
while(!result.done) {
    console.log(result)
    result = gen.next()
}

// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())
