var request = require('request');

exports.getCountries = function(params, callback){
  request({uri: 'http://api.geonames.org/countryInfoJSON?username=cianclarke', method: 'GET'}, function (err, response, body) {
    // just apply the results object to the data we send back.
    var list = JSON.parse(body);
    
    callback(undefined, {data: list.geonames});
  });
}