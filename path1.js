const path=require('path')
console.log(path.sep)
const s=path.join('content','contentdusra','text.txt');
const s1=path.resolve(__dirname,'content','contentdusra','text.txt');
console.log(s);
console.log(s1);