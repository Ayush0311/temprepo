const f=require('fs');
const a1=f.readFileSync('./content/firsttext.txt','utf8');
const a2=f.readFileSync('./content/secondtext.txt','utf-8');
f.writeFileSync('./content/firsttext.txt',`${a1+a2}`,{flag:'a'});