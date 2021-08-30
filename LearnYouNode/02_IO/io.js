const fs = require('fs')

const buf = fs.readFileSync(process.argv[2], 'utf-8')
const str = buf.toString()
const lines = str.split('\n')
console.log(lines.length-1)