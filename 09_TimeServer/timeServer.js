const net = require('net')
const strftime = require('strftime')

const portNum = process.argv[2]

const server = net.createServer(function(socket){
    let data = strftime('%F %R', new Date())
    data = data + '\n'
    socket.end(data)
})

server.listen(portNum)

