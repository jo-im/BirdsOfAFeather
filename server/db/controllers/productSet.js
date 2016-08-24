import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';
import {Products} from '../models/productModel';

export const saveNewProduct = (product) => {
  console.log('Trying to set new product');
  let selectedProduct = product;
  let expires = new Date();

  return Products.findOrCreate({
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
