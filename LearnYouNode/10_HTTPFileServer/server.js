const http = require('http')
const fs = require('fs')

const filePath = process.argv[3]

const server = http.createServer(function (req, res){
    const inF = fs.createReadStream(filePath)
    inF.pipe(res)
})

server.listen(process.argv[2])