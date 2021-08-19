const mymod = require('./myModule.js')

const input = process.argv
const dirPath = input[2]
const requireExt = input[3]

mymod(dirPath, requireExt, function(err, list){
    if (err){
        return console.error("Error:", err)
    }
    list.forEach(function (item) {
        console.log(item)
    })
})