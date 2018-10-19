function getParam (url, key) {
    if (arguments.length === 1) {
        key = url;
        url = null;
    }
    url = url || window.location.search;

    var obj = {};

    // 以 ? 或者 & 开头， 非 &、=、#其中一个
    var reg = new RegExp('[?&]([^&=#]+)=?([^&#]+)?', 'g');

    // $0 代表 匹配的整个字符串
    // $1 代表 匹配的第一个分组
    // $2 代表 匹配的第二个分组
    try {
        url.replace(reg, function($0, $1, $2) {
            obj[$1] = $2 ? decodeURIComponent($2) : '';
        });
    } catch (e) {}

    return (key ? obj[key] : obj) || null;
}

const url = 'https://www.baidu.com:3000/user/info/index.html?name=walter&age=21#pageno=1';


console.log(getParam(url, null));




