const os = require('os');

console.log(os.arch());
console.log(os.freemem());
console.log(os.totalmem());
console.log(JSON.stringify(os.networkInterfaces()));
console.log(os.tmpdir());
console.log(os.endianness());
console.log(os.hostname());
console.log(os.type());
console.log(os.platform());
console.log(os.release());