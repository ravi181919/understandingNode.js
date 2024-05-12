const http = require('http');

const option = {
    hostname: 'fakestoreapi.com',
    path:'/products/1',
    method:'GET'
}

const apiReq = http.request(option, (apiReq) => {
    apiReq.on('data', (data) => {
        console.log(data.toString());
    })
});

apiReq.on('error', (error) => {
    console.log(error);
});

apiReq.end();