const os=require('os');
console.log(os.userInfo());
console.log(os.uptime());
const ptr={
    name:os.type(),
    release:os.release(),
    Memo:os.totalmem(),
    Memofree:os.freemem(),
}
console.log(ptr);