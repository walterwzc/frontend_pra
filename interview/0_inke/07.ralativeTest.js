
function Person(name) {
    this.name = name;
}

Person.prototype.name = 'prototypeName';

const p = new Person();
console.log(p.name);



