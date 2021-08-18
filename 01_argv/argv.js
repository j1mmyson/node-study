
num = 0

process.argv.forEach(function(item, index) {
    if(index >= 2){
        num = num + Number(item)
    }
})

console.log(num)