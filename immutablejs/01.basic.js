const { List, Map } = require('immutable');

const map1 = Map({a:1, b:2, c:3});

const map2 = map1.set('b', 11);

console.log(map1.get('a') + ' : ' + map2.get('b'));

