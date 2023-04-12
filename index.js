const http = require('http');
const fs = require('fs');
const EventEmitter = require('events');

const myURL = new URL('http://localhost:8080');

/* const eventEmitter = new EventEmitter();

eventEmitter.on('loadHome', () => {
  myURL.href = 'http://localhost:8080';
});

eventEmitter.on('loadAbout', () => {
  myURL.href = 'http://localhost:8080/about';
});

eventEmitter.on('loadContactMe', () => {
  myURL.href = 'http://localhost:8080/contact-me';
}); */

const loadPage = (response, pageName) => {
  fs.readFile(`/Users/armandoortiz/repos/Basic-Informational-Site-TODP/${pageName}.html`, 'utf8', (error, html) => {
    if (error) console.error(error);
    response.writeHeader(200, { 'Content-Type': 'text/html' });
    response.write(html);
    response.end();
  });
};

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    loadPage(response, 'index');
  } else if (request.url === '/about') {
    loadPage(response, 'about');
  } else if (request.url === '/contact-me') {
    loadPage(response, 'contact-me');
  } else {
    loadPage(response, '404');
  }
});

server.listen(8080);

/* fs.readFile('/Users/armandoortiz/repos/Basic-Informational-Site-TODP/index.html', (error, data) => {
  if (error) throw error;
  http.createServer((request, response) => {
    response.writeHeader(200, { 'Content-Type': 'text/html' });
    response.write(data);
    response.end();
  }).listen(8080);
}); */
