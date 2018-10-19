const PidCrypt = require("pidcrypt");
require('pidcrypt/rsa');

const RSA_KEY_BASE64 = 'ANKi9PWuvDOsagwIVvrPx77mXNV0APmjySsYjB1/GtUTY6cyKNRl2RCTt608m9nYk5VeCG2EAZRQmQNQTyfZkw0Uo+MytAkjj17BXOpY4o6+BToi7rRKfTGl6J60/XBZcGSzN1XVZ80ElSjaGE8Ocg8wbPN18tbmsy761zN5SuIl';

const decodeBase64 = pidCryptUtil.decodeBase64(RSA_KEY_BASE64);
const RSA_KEY = pidCryptUtil.convertToHex(decodeBase64);
// console.log(decodeBase64);
// console.log('-------------------');
// console.log(RSA_KEY);



// console.log(pidCrypt);
// console.log('---------');
// console.log(pidCryptUtil);

const rsa = new PidCrypt.RSA();
rsa.setPublic(RSA_KEY, '10001', 16);



