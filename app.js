const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url=== '/') {
        res.write('<html>');
        res.write('<head><title>Mi primera pagina</title></head>');
        res.write('<body><form action="/mensaje" method="POST"><input type="text" name="mensaje"></input><button type="submit">Enviar</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Mi primera pagina</title></head>');
    res.write('<body><h1> Hola desde el Servidor Node.JS</h1></body>');
    res.write('</html>');
    return res.end();
})

server.listen(3000);