import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';
import {Products} from '../models/productModel';

export const getProduct = (product) => {
  let selectedProduct = JSON.parse(product.data);

  return Products.find({
    where: {
      upc: selectedProduct.upc,
    }
  })
  .then((gotProduct) => {
    console.log('Success in getting product', gotProduct);
    return gotProduct;
  })
  .catch((err) => {
    console.log('Error in getting product ===> ', err);
    return err;
  });
};

////// TESTING
// let testdata = {};
// testdata.data = JSON.stringify({
//   upc: 1234567890,
// });
//
// getProduct(testdata);
