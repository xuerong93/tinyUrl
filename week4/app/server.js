var express = require("express");
var app = express();
var restRouter = require("./routes/rest");
var redirectRouter = require("./routes/redirect");
var indexRouter = require("./routes/index");

//mongoose is an api to connect to database
var mongoose = require('mongoose');
mongoose.connect('mongodb://user:user@ds133249.mlab.com:33249/tinyurlsherry');

var useragent = require('express-useragent');

app.use(useragent.express());

app.get('/',indexRouter);

app.use("/api/v1",restRouter);

app.use(express.static('public'));

app.use("/:shortUrl",redirectRouter);

app.listen(3000,function(){
  console.log("tinyurl on port 3000")
});
