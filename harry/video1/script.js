const express = require('express')
const app = express()
const port = 3000;
app.use(express.static('public'))
app.get('/',(req,res)=>{
        res.send("Hello world");
});
app.get('/blog',(req,res)=>{
    res.send("Hello from blog");
});
app.get('/about',(req,res)=>{
    res.send("Hello from about");
});
//my name
app.get('/blog/:slug',(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send(`hello ${req.params.slug}`)
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})