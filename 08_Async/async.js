const http = require('http')
const bl = require('bl')
const url = [process.argv[2], process.argv[3], process.argv[4]]

const result = []
let count = 0


function getHTTP(url) {
    http.get(url, function(response){
        response.pipe(bl(function(err, data){
            if (err){
                return console.error(err)
            }
            result[count] = data.toString()
            count += 1
            if (result.length == 3){
                result.forEach(function(item){
                    console.log(item)
                })
            }
        }))
    })
}

url.forEach(function(v){
    getHTTP(v)
})
