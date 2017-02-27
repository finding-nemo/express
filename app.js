'use strict';

const express = require('express');
let app = express();

let port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<html><head></head><body><h1>Hello World!!.</h1></body></html>');
});

//With this route we add a parameter called id (:id) We then add it to the html using (req.params.id).  The (.id) corresponds with the (:id) in this case. With this pattern anything entered in the request url after the specified address (/person/) will be rendered to the page at (req.params.id).
app.get('/person/:id', (req, res) => {
  res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});

//This route will map to the address (/api) and respond with a json string produced from the object by using res.json.
app.get('/api', (req, res) => {
  res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port);