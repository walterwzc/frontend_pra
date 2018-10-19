class Person {
    constructor (paramName) {
        if (paramName) {
            this.name = paramName
        } else {
            this.name = 'init default name'
        }
    }

    sayHi () {
        console.log(this.name)
    }
}


const p1 = new Person()

p1.sayHi()