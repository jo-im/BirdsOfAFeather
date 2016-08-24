import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';
import {Products} from '../models/productModel';

export const getProduct = (productUPC) => {

  return Products.find({
    where: {
      upc: productUPC,
    }
  })
  .then((gotProduct) => {
    console.log('Success in getting product');
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
