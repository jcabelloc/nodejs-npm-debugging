const fs = require('fs');

const enrutador = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url=== '/') {
        res.write('<html>');
        res.write('<head><title>Mi primera pagina</title></head>');
        res.write('<body><form action="/mensaje" method="POST"><input type="text" id="miinput" name="nombre-producto"></input><button type="submit">Enviar</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/mensaje' && method === 'POST') {


        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const txtBody = Buffer.concat(body).toString();
            console.log(txtBody)
            const mensaje = txtBody.split('=')[1];
            fs.writeFile('mensaje.txt', mensaje, err => {
                res.statusCode = '302';
                res.setHeader('Location', '/')
                return res.end();
            });
        })
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Mi primera pagina</title></head>');
    res.write('<body><h1> Hola desde el Servidor Node.JS</h1></body>');
    res.write('</html>');
    res.end();

}


exports.enrutador = enrutador;
exports.descripcion = 'Esta funcion maneja el enrutamiento de mi app';