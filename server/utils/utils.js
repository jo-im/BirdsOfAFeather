const request = require('request');
// require('dotenv').config();

const foodFactsHandler = (req, res) => {
  console.log('inside foodfacts api');
  const upc = req.body.event.data.slice(1);

  request.post(
    'https://api.foodfacts.com/ci/api/foodfacts/food_find_product_by_upc/format/json',
    {
      form: {
        login: process.env.FOOD_FACTS_LOGIN,
        password: process.env.FOOD_FACTS_PASSWORD,
        upc: upc
      }
    },
    function (error, response, body) {
      if (!error) {
        var parsedBody = JSON.parse(body);
        console.log(parsedBody);
        res.send(parsedBody.results);
      } else {
        console.log('Food Facts API error', error);
      }
    }
  );
};

exports.foodFactsHandler = foodFactsHandler;
