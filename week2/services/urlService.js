//var longToShort = {};
//var shortToLong = {};

var UrlModel = require('../models/urlModel');

//this part is to generate an array like ["a".."z","A",.."Z","0",.."9"]
var encode = [];
var genCharArray = function(charA,charZ){
  var arr=[],i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
  for(;i<=j;i++){
    arr.push(String.fromCharCode(i));
  }
  return arr;
}
encode = encode.concat(genCharArray("a","z"));
encode = encode.concat(genCharArray("A","Z"));
encode = encode.concat(genCharArray("0","9"));

var getShortUrl = function(longUrl, callback){
  //UrlModel.findOne(condition?:callback function(err,responde))
  UrlModel.findOne({longUrl: longUrl}, function(err, url){
    if(url){
      callback(url);
    }else{
      generateShortUrl(function(shortUrl){
        var url = new UrlModel({shortUrl: shortUrl, longUrl: longUrl});
        url.save();
        callback(url);
      });

    }
  });
  // if(longToShort[longUrl] != null){
  //   return longToShort[longUrl];
  // }else{
  //   var shortUrl = generateShortUrl();
  //   longToShort[longUrl] = shortUrl;
  //   shortToLong[shortUrl] = longUrl;
  //   return shortUrl;
  // }
};

// var generateShortUrl = function(){
//     return convertTo62(Object.keys(longToShort).length);//get the size of object
// };

var generateShortUrl = function(callback){
    //count number of matching result
    UrlModel.count({},function(err,length){
      callback(convertTo62(length));
    });
};


var convertTo62 = function(num){
  var result = "";
  do{
    result = encode[num%62]+result;
    num = Math.floor(num/62);
  }while(num)
  return result;
};

var getLongUrl = function(shortUrl,callback){
  UrlModel.findOne({shortUrl: shortUrl},function(err,url){
    callback(url);
  });
  //return shortToLong[shortUrl];
};

//export all the method which would be used outside the file and wrap them into an object
module.exports = {
  getShortUrl: getShortUrl,
  getLongUrl: getLongUrl
};
