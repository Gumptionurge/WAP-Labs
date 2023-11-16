

const dns = require('dns');
let options={family:4}
let website='www.miu.edu';
dns.lookup(website,options,(err, address, family) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(address);
});