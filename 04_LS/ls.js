const fs = require('fs')
const path = require('path')

const input = process.argv

const dirPath = input[2]
const requireExt = input[3]

fs.readdir(dirPath, function(err, list){
    list.forEach(function(item){
        const ext = path.extname(item).slice(1)
        if (ext == requireExt){
            console.log(item)
        }
    })
})