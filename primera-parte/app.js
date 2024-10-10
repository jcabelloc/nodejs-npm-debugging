const http = require('http');

const routes = require('./routes')


console.log(routes.descripcion);

const server = http.createServer(routes.enrutador);

server.listen(3000);