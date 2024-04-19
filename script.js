

var figlet = require("figlet")
figlet("Hello World!!" , function (err,data){
    if(err)
    {
        console.log("Wrong")
        console.dir(err);
        return;
    }
    console.log(data)

});
