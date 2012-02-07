var request = require('request');

exports.getCountries = function(params, callback){
  request({uri: 'http://api.geonames.org/countryInfoJSON?username=cianclarke', method: 'GET'}, function (err, response, body) {
    // just apply the results object to the data we send back.
    var list = JSON.parse(body);
    
    callback(undefined, {data: list.geonames});
  });
}

exports.getTweets = function(params, callback){
  
  request({uri: 'http://search.twitter.com/search.json?q=feedhenry', method: 'GET'}, function (err, response, body) {
    // just apply the results object to the data we send back.
    var search = JSON.parse(body);
    
    callback(undefined, {data: search.results});
  });
}