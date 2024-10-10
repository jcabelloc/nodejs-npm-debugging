const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url=== '/') {
        console.log('en /')
        res.write('<html>');
        res.write('<head><title>Mi primera pagina</title></head>');
        res.write('<body><form action="/mensaje" method="POST"><input type="text" name="mensaje"></input><button type="submit">Enviar</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/mensaje' && method === 'POST') {
        console.log('en /mensaje')
        fs.writeFileSync('mensaje.txt', 'Hemos recibido un mensaje')
        res.statusCode = '302';
        res.setHeader('Location', '/')
        return res.end();

    }
    console.log('en otro')
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Mi primera pagina</title></head>');
    res.write('<body><h1> Hola desde el Servidor Node.JS</h1></body>');
    res.write('</html>');
    res.end();

})

server.listen(3000);