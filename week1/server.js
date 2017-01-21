var express = require("express");
var app = express();
var restRouter = require("./routes/rest");
var redirectRouter = require("./routes/redirect");

app.get('/',function(req,res){
  res.send("hello world")
});

app.use("/api/v1",restRouter);
app.use("/:shortUrl",redirectRouter);
app.listen(3000,function(){
  console.log("tinyurl on port 3000")
});
