const fs = require('fs')



fs.readFile(process.argv[2], 'utf-8', function(err, data){
    if(err) {
        return console.log(err)
    }
    const str = data.toString()
    const lines = str.split('\n')
    console.log(lines.length-1)
})