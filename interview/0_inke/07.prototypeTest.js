var name = 'oop';

var Person = function(options) {
    this.name = options.name;
}

Person.prototype.name = 'Person'

Person.prototype.getName = function() {
    console.log(this === global);
    return this.name;
}

var p = new Person({name: 'inke'});

// console.log(p.constructor === Person);
// console.log(p instanceof Person);
// console.log(p.__proto__ == Person.prototype);

// console.log(p.hasOwnProperty('name'));
// console.log(p.hasOwnProperty('getName'));


var getName = p.getName;

// console.log(getName === Person.prototype.getName);

// this
console.log(getName());

// console.log(Person.prototype.getName());
// console.log(p.getName());