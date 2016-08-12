const express = require('express');
const bodyParser = require('body-parser');
const foodFactsHandler = require('./utils/utils.js').foodFactsHandler;
const facebookHandler = require('./utils/utils.js').facebookHandler;
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + '/../client/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/foodfacts/upc', foodFactsHandler);
app.post('/api/facebook', facebookHandler);

app.listen(port, function() {
  console.log('NodeJS Running on port', port);
});
