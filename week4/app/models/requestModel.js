var mongoose = require('mongoose');

var Schema = mongoose.Schema;
//identify a schems
var RequestSchema = new Schema({
  //different from pyson's code
  shortUrl:String,
  referer: String,
  platform: String,
  browser: String,
  countryOrRegion: String,
  timestamp: Date

});

var RequestModel = mongoose.model('RequestModel',RequestSchema);
module.exports = RequestModel;
