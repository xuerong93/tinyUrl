var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
var urlService = require("../services/urlService");
var statsService = require("../services/statsService");
var path = require('path');

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

router.get('/urls/:shortUrl', function(req, res){
  var shortUrl = req.params.shortUrl;
  urlService.getLongUrl(shortUrl, function(url){
    if(url){
      res.json(url);
    }else{
        res.status(200).sendFile('index.html', {root: path.join(__dirname, '../public/')});
    }
  });
});

router.get('/urls/:shortUrl/:info', function(req, res){
  var shortUrl = req.params.shortUrl;
  var info = req.params.info;

  statsService.getUrlInfo(shortUrl, info, function(data){
    res.json(data);
  });
});

module.exports = router; // the thing want to expose,if not expose, no one can access it.
