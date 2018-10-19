const url = 'http://a.yuanfudao.ws:3000/teachers/16021213/lesson';


// const url1 = 'http://a.yuanfudao.ws:3000/teachers/16021213/lesson?lessonId=3445596';
// const url2 = 'http://a.yuanfudao.ws:3000/teachers/16021213/lesson';


let paramIndex = url.lastIndexOf('?');

const path = paramIndex > -1 ? url.substring(0, paramIndex) : url.substring(0);


// let pathArr = url2.substr(0, url2.lastIndexOf('?')).split('/');
// let lastPath = pathArr[pathArr.length - 1];

// console.log(lastPath);


// const str = url.substring(0, 2);
// console.log(str);

console.log(path);


