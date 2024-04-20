const express = require('express')
const app = express();
const blog = require('./routes/blog')
const shop = require('./routes/shop')
const port = 3000;
app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)



app.get('/', (req, res) => {
  res.send('Hello from get1');
}).post('/',(req,res)=>{
    res.send("Hello from post1");
}).put('/',(req,res)=>{
    res.send("Hello from put1");
})


app.get('/index',(req,res)=>{
    console.log("Hey its index");
    res.sendFile('templates/index.html', {root:__dirname});
    res.json({ a1: 1, b1: 2, c1: 3, d1: 4, name: ["Mukti", "Patel"] })
})

app.get("/api", (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4, name: ["harry", "jerry"] })
})


app.listen(port,()=>{
    console.log("Port is ready")
})