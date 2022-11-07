import http from 'http';
import fs from 'fs';

class App {
  start(port, hostname) {
    http.createServer((req, res) => {
      console.log(req.url);
      fs.readFile('index.html', 'utf8', (err, data) => {
        if (err) {
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html; charset=utf8');
          res.end('Ce fichier n\'existe pas')
        } else {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html; charset=utf8');
          res.end(data)
    
        }
      })
    }).listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    })
  }
  request(options) {
    let request = http.request(options, function (res) {
      res.on('data', (d) => {
        process.stdout.write(d);
      });
    });
    request.on('error', function (e) {
        console.log(e.message);
    });
    request.end();
  }
}

export default new App();
