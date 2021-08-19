const path = require('path');
const fs = require('fs')

module.exports = function (dirPath, ext, callback) {

    fs.readdir(dirPath, function(err, list){
        if(err){
            return callback(err)
        }
        
        list = list.filter(function(item){
            return path.extname(item).slice(1) === ext
        })

        callback(null, list)
    })

}


