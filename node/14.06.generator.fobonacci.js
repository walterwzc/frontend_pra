
function * fibonacci() {
    let [current, next] = [0, 1]
    while(true) {
        [current, next] = [next, current + next]
        yield current
    }
}

const fibonacciGen = fibonacci()


// for (let count = 0; count < 20; count++) {
//     console.log(fibonacciGen.next().value)
// }

for (let result of fibonacci()) {
    if (result > 500) {
        break;
    }
    console.log(result)
}

