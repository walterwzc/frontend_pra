

// 1. 将数组中的 VIP 用户余额加 10
/* const users = [
    { username: "Kelly", isVIP: true, balance: 20 },
    { username: "Tom", isVIP: false, balance: 19 },
    { username: "Stephanie", isVIP: true, balance: 30 }
]

const updatedUsers = users.map((item, index) => {
    return item.isVIP ? {...item, balance: item.balance + 10} : item
})

console.log(updatedUsers) */


// 2. 判断字符串中是否含有元音字母
/* const randomStr = "hdjrwqpw";
const yuanyin = ['a', 'e', 'i', 'o', 'u'];
const whetherContain = yuanyin.some((item, index) => randomStr.includes(item));

console.log(whetherContain)
 */


// 3. 判断用户是否全部是成年人
/* const users = [
    { name: "Jim", age: 23 },
    { name: "Lily", age: 17 },
    { name: "Will", age: 25 }
];

const adultResult = users.every((item, index) => item.age > 18);
console.log(adultResult); */



// 4. 成年人有哪些？
/* const users = [
    { name: "Jim", age: 23 },
    { name: "Lily", age: 17 },
    { name: "Will", age: 25 }
];

users.filter((item, index) => {
    return item.age > 18
}).forEach((item, index) => {
    console.log(item.name)
}) */



// 5. 将数组中重复项清除
/* const dupArr = [1, 2, 3, 3, 3, 3, 6, 7];

const clearDup = arr => [...new Set(arr)]

console.log(clearDup(dupArr)); */

/*
6. 生成由随机整数组成的数组，数组长度和元素大小可自定义
*/
const randomArr = (length, limit) => Array.from({length}, () => {
    return Math.floor(Math.random() * limit)
})

console.log(randomArr(5, 10))








