// Write a program to show the workflow of restarting a Node application.  


// 8b same  

const http=require("http");
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-Tupe" : "text/plan"})
    res.end("hello! nodejs\n");

})
const port = process.env.port || 3000;
server.listen(port,()=>{
    console.log(`server is running on https://localhost:${port}`)
})