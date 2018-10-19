
console.log(fn);
var fn = () => {};
var fn;
console.log(fn);
var fn = 2;
console.log(fn);

var a = 3;
var b = 4;
var test = () => {
    console.log(a);
    console.log(b);
    var a = 1;
}

test();



