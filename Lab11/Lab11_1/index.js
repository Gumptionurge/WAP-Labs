

const dns = require('dns');
let options={family:4}

dns.lookup('www.miu.edu',options,(err, address, family) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(address);
});