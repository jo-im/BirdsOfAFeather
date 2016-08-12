const request = require('request');
// require('dotenv').config();
const _ = require('lodash');

const foodFactsHandler = (req, res) => {
  console.log('inside foodfacts api');
  const upc = req.body.event.data.slice(1);
  console.log(upc);
  request.post(
    'https://api.foodfacts.com/ci/api/foodfacts/food_find_product_by_upc/format/json',
    {
      form: {
        login: process.env.FOOD_FACTS_LOGIN,
        password: process.env.FOOD_FACTS_PASSWORD,
        upc: '014100085461'
        // upc: upc
      }
    },
    function (error, response, body) {
      if (!error) {
        var parsedBody = JSON.parse(body);
        var result = parseFoodFactsData(parsedBody.results);
        res.send(result);
      } else {
        console.log('Food Facts API error', error);
      }
    }
  );
};

const parseFoodFactsData = (data) => {
  console.log(data);
  const allergies = {};
  const diet = {};
  const ingredientList = [];

  _.forEach(data.product_allergens, function(allergen) {
    var name = allergen.name;
    allergies[name] = [];
    diet[name] = true;
  });

  const foodFactsData = {
    allergies: allergies,
    diet: diet,
    imgURL: '',
    ingredientList: '',
    reportCard: '',
    score: '',
  };
  console.log(foodFactsData);
  return foodFactsData;

};


const facebookHandler = (req, res) => {
  console.log('here in facebookHandler: ', req.body);
}

exports.foodFactsHandler = foodFactsHandler;
exports.facebookHandler = facebookHandler;