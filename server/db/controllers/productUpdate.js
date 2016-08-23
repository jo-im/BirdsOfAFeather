import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';
import {Products} from '../models/productModel';

export const setProductUpdate = (product, newRate) => {
  console.log('Trying to update product');
  let upc = product.dataValues.upc;
  let totalNumRating = product.dataValues.totalNumRatings;
  let average = product.dataValues.averageRating;

  average = Math.round(
    (totalNumRating / (totalNumRating + 1)) * average +
    (1 / (totalNumRating + 1)) * newRate);
  totalNumRating += 1;

  return product.update(
    {
      averageRating: average,
      totalNumRatings: totalNumRating
    }
  )
  .then((updatedProduct) => {
    console.log('Success in updating product');
    return updatedProduct;
  })
  .catch((err) => {
    console.log('Error in updating product ===> ', err);
    return err;
  });
};
