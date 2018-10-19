
let URl = `file:///D:/Users/kay.liao/Desktop/H5%E7%9A%84%E9%A1%B5%E9%9D%A2/20160129/20160129/report-detail.html?a=b&c=d`;

var params = {};

let result = URl.replace(/(&)?([^=]+)=([^&]+)/g, function(a, b, c, d, key, value){
    console.log('========')
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log(key)
    console.log(value)
    console.log('========')
    return params[key] = decodeURIComponent(value);
});

console.log('---------------')
console.log(params)