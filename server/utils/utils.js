const request = require('request');
require('dotenv').config();
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

  _.forEach(data.product_ingredients, function(ingredient) {
    if (ingredient.name !== ',') {
      if (ingredient.allergens !== null) {
        var allergens = ingredient.allergens;
        allergens = allergens.replace(/\d+:/g, '').split('|');
        ingredientList.push(ingredient.name);
        
        _.forEach(allergens, function(allergen) {
          if (allergies[allergen]) {
            allergies[allergen].push(ingredient.name);
          }
        });

      }
    }
  });

  const foodFactsData = {
    allergies: allergies,
    diet: diet,
    imgURL: data.product_detail.product_image,
    ingredientList: ingredientList,
    reportCard: data.report_card,
    score: data.product_detail.food_facts_score
  };
  console.log(foodFactsData);
  return foodFactsData;

};

const facebookHandler = (req, res) => {
  console.log('here in facebookHandler: ', req.body);
};

exports.foodFactsHandler = foodFactsHandler;
exports.facebookHandler = facebookHandler;
