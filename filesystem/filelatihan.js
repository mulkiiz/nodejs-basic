const fs = require('fs');
 
const data = fs.readFileSync('text.txt', 'UTF-8');
console.log(data);