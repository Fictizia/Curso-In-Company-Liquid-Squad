var http = require('http'),
    url = require('url');

http.createServer(function (req, res) {
  var pathname = url.parse(req.url).pathname;

  if (pathname === '/') {
      res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end('Index!');

  } else if (pathname === '/contacto') {
      res.writeHead(200, {
      'Content-Type': 'text/plain; charset=utf-8'
    });
    res.end('Página de contacto');


  } else if (pathname === '/quienes') {
      res.writeHead(301, {
      'Location': '/'
    });
    res.end('¿Quiénes somos? ¿A dónde vamos?');

  } else {
      res.writeHead(404, {
      'Content-Type': 'text/plain'
    });
    res.end('Error 404!');
  }

}).listen(process.env.PORT, process.env.IP);

console.log('Servidor funcionando en http://'+process.env.IP+':'+process.env.PORT+'/');
