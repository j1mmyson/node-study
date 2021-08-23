const http = require('http')
let url = require('url')

const parseTime = function(time){
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixTime(time){
    return {unixtime: time.getTime()}
}

const parseQuery = function(url) {
    switch (url.pathname){
        case '/api/parsetime':
            return parseTime(new Date(url.query.iso))
        case '/api/unixtime':
            return unixTime(new Date(url.query.iso))
        default:
            return 'invalid input'
    }
}

const server = http.createServer(function(req, res){
    if(req.method == 'GET'){
        res.writeHead(200, {'Content-Type': 'application/json'})
        url = url.parse(req.url, true)
        res.end(JSON.stringify(parseQuery(url)))
    } else{
        res.writeHead(405)
        res.end()
    }
})

server.listen(process.argv[2], function(){
    console.log('Listening on %s', process.argv[2])
})