const http = require('http');
const fs = require('fs');
const navigationBar = require('./components/navigation-bar');
const productForm = require('./components/product-form');
const productTableBase = require('./components/product-table');

const arrayProducts = [
  { name: 'Pepsi', quantity: '150', price: '10' },
  { name: 'Cocacola', quantity: '100', price: '25' },
  { name: 'RedBull', quantity: '50', price: '15' },
  { name: 'Jabon', quantity: '35', price: '5' },
  { name: 'Cepillo', quantity: '30', price: '15' }
];
const arrayUseres = [];

const server = http.createServer((req, res) => {

  console.log("******** New Request *******");
  console.log("req.method: " + req.method);
  console.log("req.url: " + req.url);
  console.log(" ");

  if (req.url === '/' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.write(navigationBar);
    res.end()
  }
  // PRODUCT FORM
  else if (req.url === '/product-form' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.write(navigationBar + productForm);
    res.end()
  }
  // PRODUCT TABLE
  else if (req.url === '/product-table' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    let rows = ''
    for (let i = 0; i < arrayProducts.length; i++) {
      rows = rows + '<tr>'
        + '<td>' + i + '</td>'
        + '<td>' + arrayProducts[i].name + '</td>'
        + '<td>' + arrayProducts[i].quantity + '</td>'
        + '<td>' + arrayProducts[i].price + '</td>'
        + '<td><button onclick="">Edit</button></td>'
        + '<td><button onclick="">Delete</button></td>'
        + '</tr>';
    }
    let productTable = productTableBase;
    productTable = productTable.replace('{ROWS}', rows)
    res.write(navigationBar + productTable);
    res.end()
  }
  // PRODUCT CREATION
  else if (req.url === '/product-form' && req.method === 'POST') {
    let chunkProducts = '';
    req.on('data', (chunk) => {
      chunkProducts += chunk;
    });
    req.on('end', () => {
      // chunkProducts: 'name=coca&quantity=1050&price=10'
      // arrayData: [ 'name=coca', 'quantity=100', 'price=10' ]
      const arrayData = chunkProducts.split('&');
      const name = arrayData[0].split('=')[1];
      const quantity = arrayData[1].split('=')[1];
      const price = arrayData[2].split('=')[1];
      const newProduct = { name, quantity, price };
      arrayProducts.push(newProduct)
      console.log({ arrayProducts })
      res.setHeader('Content-Type', 'text/html');
      res.write(navigationBar + productForm);
      res.end();
    });
  } // CSS
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
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write(navigationBar);
    res.end()
  }
});

server.listen(5000);
