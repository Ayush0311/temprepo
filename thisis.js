const ptr=require('lodash')
const a=[1,[2,[3,[4]]]];
const jk=ptr.flattenDeep(a);
console.log(jk);