const http=require('http')
const server = http.createServer((req,res)=>{
    if(req.url === '/about')
 {
     res.end('This is about ayush')
 }
 else if(req.url === '/')
 {
     res.end('this is ayush')
 }
 else{
     res.end(`the second `);
 }
}
)
server.listen(1812)