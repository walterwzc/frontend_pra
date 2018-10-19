var text = 'cat, bat, sat, fat'
// 使用/at/g 匹配字符串中所有的at，并将其替换为ond，
// 函数的参数分别为：当前匹配的字符，当前匹配字符的位置，原始字符串
var result = text.replace(/at/g, function(match, key) {
    console.log(match + ' : ' + key + " : ")
    return 'ond'
})
console.log(result)
