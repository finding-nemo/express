'use strict';

const express = require('express');
let app = express();

let port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<html lang="en"><head><meta charset="UTF-8"/><title>Document</title></head><body><h1>Hello World!!.</h1></body></html>');
});

app.get('/api', (req, res) => {
  res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);