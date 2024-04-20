const express = require('express');
const app = express();
app.set("view engine" , "ejs");
app.use(express.static('./public'));
const port = 3000
// app.get("/", function (req, res) {
//     res.render("index" , {age:12});
// });

app.get("/",(req,res)=>{
    res.send("Hello world get");
});
app.post("/",(req,res)=>{
    res.send("Hello world post ");
});
app.put("/",(req,res)=>{
    res.send("Hello world post ");
});
app.get("/index", (req, res) => {
    console.log("Hey its index")
    res.sendFile('public/mypage.html', { root: __dirname })
});

app.get("/api", (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4, name: ["harry", "jerry"] })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

