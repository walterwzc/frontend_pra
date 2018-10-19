function print() {
    console.log('Hello')
}


obj = {
    name: 'aaa',
    age: 20
}

print.obj = obj;

print();

console.log(print.obj)