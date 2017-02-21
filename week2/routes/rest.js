var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlService = require("../services/urlService");


router.post("/urls",jsonParser,function(req,res){  //based on /api/v1 path
  var longUrl = req.body.longUrl;
  if(longUrl.indexOf("http") === -1){
    longUrl = "http://"+longUrl;
  }
  // var shortUrl = urlService.getShortUrl(longUrl);
  // res.json({
  //   shortUrl: shortUrl,
  //   longUrl: longUrl
  // });
  urlService.getShortUrl(longUrl, function(url){
    //once get a responde, sent it as json immediately
    res.json(url);
  });
});

module.exports = router; // the thing want to expose,if not expose, no one can access it.
