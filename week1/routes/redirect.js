var express = require("express");
var router = express.Router();
var urlService = require("../services/urlService");


router.get("*",function(req,res){  //based on /api/v1 path
  var shortUrl = req.originalUrl.slice(1);
  var longUrl = urlService.getLongUrl(shortUrl);
  if(longUrl){
    res.redirect(longUrl);
  }else{
    res.send("No such URL");
  }

});


module.exports = router; // the thing want to expose,if not expose, no one can access it.
