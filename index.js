const http = require('http');
const fs = require('fs');

const loadPage = (response, pageName) => {
  fs.readFile(`/Users/armandoortiz/repos/Basic-Informational-Site-TODP/${pageName}.html`, 'utf8', (error, html) => {
    if (error) console.error(error);
    response.writeHeader(200, { 'Content-Type': 'text/html' });
    response.write(html);
    response.end();
  });
};
/*
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

server.listen(8080); */

const express = require('express');

const app = express();
const router = express.Router();
const port = 8080;

router.get('/', (request, response) => {
  loadPage(response, 'index');
});

router.get('/about', (request, response) => {
  loadPage(response, 'about');
});

router.get('/contact-me', (request, response) => {
  loadPage(response, 'contact-me');
});

app.use('/', router);
app.use((request, response, next) => {
  response.status(404).send('Error 404 - Page was not found');
});
app.listen(port);

/* fs.readFile
('/Users/armandoortiz/repos/Basic-Informational-Site-TODP/index.html', (error, data) => {
  if (error) throw error;
  http.createServer((request, response) => {
    response.writeHeader(200, { 'Content-Type': 'text/html' });
    response.write(data);
    response.end();
  }).listen(8080);
}); */
