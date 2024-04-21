const express = require('express')
const app = express()
const port = 3000
// app.use(express.static("public"));
const fs = require('fs')
app.use((req,res,next)=>{
    console.log(req.headers)
    req.harry = "I am mukti";
    fs.appendFileSync("logs.txt" , `${Date.now()} is a req ${req.method}\n`);
    console.log(`${Date.now()} is a req ${req.method}`);
    // res.send("m1");
    next();
})
app.use((req,res,next)=>{
    console.log("middleware 2");
    next();
})


app.get('/',(req,res)=>{
    res.send("Hello");
})
app.get('/contact',(req,res)=>{
    res.send("Hello contact");
})
app.get('/about',(req,res)=>{
    res.send("Hello about" + req.harry);
})
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})