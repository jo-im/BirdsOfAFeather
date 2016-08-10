const express = require('express');
const bodyParser = require('body-parser');
const foodFactsHandler = require('./utils/utils.js').foodFactsHandler;

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + '/../client/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/foodfacts/upc', foodFactsHandler);

app.listen(port, function() {
  console.log('NodeJS Running on port', port);
});
