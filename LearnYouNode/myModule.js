var fs = require('fs');
var path = require('path');

module.exports = function (dirName, extFilter, callback) {

  var result = []
  extFilter = '.' + extFilter;

  fs.readdir(dirName, function (err, list) {
    if (err){
      return callback(err)
    }
    list.forEach(function (item) {
      if (extFilter === path.extname(item)){
        result.push(item)
      }
    })
    callback(null, result);
  })
}