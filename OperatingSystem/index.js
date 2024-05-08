const os = require('os');

console.log('OS Architecture ' + os.arch());

console.log('free memory space ' + os.freemem());

console.log('Total memory space ' + os.totalmem());

console.log('OS net work Interface ' + JSON.stringify(os.networkInterfaces()));

console.log('Os default temp dir ' + os.tmpdir());

console.log('order of bits in a sequence within a binary representation of a number' + os.endianness());

console.log('OS Hostname ' + os.hostname());

console.log('OS type ' + os.type());

console.log('OS platform ' + os.platform());

console.log('OS release date ' + os.release());