const express = require('express');
const bodyParser = require('body-parser');
const foodFactsSearchHandler = require('./utils/utils.js').foodFactsSearchHandler;
const foodFactsUPCHandler = require('./utils/utils.js').foodFactsUPCHandler;

import dbRoutes from './db/routes/dbRoutes';

const port = process.env.PORT || 3000;

export const app = express();


app.use(express.static(__dirname + '/../client/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/foodfacts/search', foodFactsSearchHandler);
app.post('/api/foodfacts/upc', foodFactsUPCHandler);

// Routes for database interaction
dbRoutes(app);
app.use('*', () => console.log('request to server'));

app.listen(port, function() {
  console.log('NodeJS Running on port', port);
});
