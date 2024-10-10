const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if (url=== '/') {
        res.write('<html>');
        res.write('<head><title>Mi primera pagina</title></head>');
        res.write('<body><form action="/mensaje" method="POST"><input type="text" name="nombre-producto"></input><button type="submit">Enviar</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/mensaje' && method === 'POST') {


        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const txtBody = Buffer.concat(body).toString();
            console.log(txtBody)
            const mensaje = txtBody.split('=')[1];
            fs.writeFileSync('mensaje.txt', mensaje);
        })
        res.statusCode = '302';
        res.setHeader('Location', '/')
        return res.end();


    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Mi primera pagina</title></head>');
    res.write('<body><h1> Hola desde el Servidor Node.JS</h1></body>');
    res.write('</html>');
    res.end();

})

server.listen(3000);