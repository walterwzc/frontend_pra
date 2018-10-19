const AVATAR_PATH = 'ytkgallery.com';
const DEFAULT = '/123.jpg'
let width = 90;
let imageId = null;
let str = AVATAR_PATH + (imageId || DEFAULT) + (width ? '?width=' + width : '');


console.log(str);