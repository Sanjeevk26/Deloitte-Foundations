const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Heya, you have come to the right place!');
        res.end();
    }

    if (req.url === '/api/users') {
        res.write(JSON.stringify([{ id: 1, name: 'Sanjeev' }, { id: 2, name: 'Vishwas' }]));
        res.end();
    }
});

server.listen(PORT);

server.on('connection', socket =>{
    console.log('New connection .....');
});

console.log(`Listening on port ${PORT}...`);
