const http = require('http');
var fs = require('fs');

const server = http.createServer((req, res) => {

  console.log("******** New Request *******");
  console.log("req.method: " + req.method);
  console.log("req.url: " + req.url);
  console.log(" ");

  // HTML
  if (req.url === '/') {
    fs.readFile('html/navigation-bar.html', function (err, navigationBar) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(navigationBar);
      res.end();
    });
  } else if (req.url === '/product-form.html') {
    fs.readFile('html/navigation-bar.html', function (err, navigationBar) {
      fs.readFile('html/product-form.html', function (err, productForm) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(navigationBar + productForm);
        res.end();
      });
    });
  } else if (req.url === '/product-table.html') {
    fs.readFile('html/navigation-bar.html', function (err, navigationBar) {
      fs.readFile('html/product-table.html', function (err, productTable) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(navigationBar + productTable);
        res.end();
      });
    });
  } else if (req.url === '/user-form.html') {
    fs.readFile('html/navigation-bar.html', function (err, navigationBar) {
      fs.readFile('html/user-form.html', function (err, userForm) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(navigationBar + userForm);
        res.end();
      });
    });
  } else if (req.url === '/user-table.html') {
    fs.readFile('html/navigation-bar.html', function (err, navigationBar) {
      fs.readFile('html/user-table.html', function (err, userTable) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(navigationBar + userTable);
        res.end();
      });
    });
  }
  // CSS
  else if (req.url === '/center.css') {
    fs.readFile('css/center.css', function (err, data) {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.write(data);
      res.end();
    });
  } else if (req.url === '/form.css') {
    fs.readFile('css/form.css', function (err, data) {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.write(data);
      res.end();
    });
  } else if (req.url === '/table.css') {
    fs.readFile('css/table.css', function (err, data) {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.write(data);
      res.end();
    });
  }
  // JAVASCRIPT
  else if (req.url === '/mock-data.js') {
    fs.readFile('javascript/mock-data.js', function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else if (req.url === '/product-form.js') {
    fs.readFile('javascript/product-form.js', function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else if (req.url === '/product-table.js') {
    fs.readFile('javascript/product-table.js', function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else if (req.url === '/user-form.js') {
    fs.readFile('javascript/user-form.js', function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else if (req.url === '/user-table.js') {
    fs.readFile('javascript/user-table.js', function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else if (req.url === '/utils-local-storage.js') {
    fs.readFile('javascript/utils-local-storage.js', function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else {
    fs.readFile('html/navigation-bar.html', function (err, navigationBar) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(navigationBar);
      res.end();
    });
  }

});

server.listen(5000);
