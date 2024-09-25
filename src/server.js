import http from 'node:http';

const server = http.createServer((req, res) => {

})

server.listen(3333, () => {
    console.log('Server is running on http://localhost:3333');
})
