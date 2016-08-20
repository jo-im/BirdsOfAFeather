import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';
import {Products} from '../models/productModel';

export const saveNewProduct = (product) => {
  console.log('Trying to set new product');
  let selectedProduct = JSON.parse(product.data);
  let expires = new Date();

  Products.findOrCreate({
    where: {
      upc: selectedProduct.upc,
      refreshTime: expires,
      foodFacts: selectedProduct.foodData
    }
  })
  .then((setProduct) => {
    console.log('Success in setting product');
    return setProduct;
  })
  .catch((err) => {
    console.log('Error in setting user ===> ', err);
    return err;
  });
};

// TESTING
let testdata = {};
testdata.data = JSON.stringify({
  upc: 1234567890,
  foodData: {test: 'random'}
});

saveNewProduct(testdata);
