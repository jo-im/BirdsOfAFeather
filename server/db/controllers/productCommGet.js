import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';
import {Products} from '../models/productModel';
import {Users_Products} from '../models/usersProductsModel';
import {Users} from '../models/userModel';

export const getComments = (productUPC, foodData, res) => {

  return Products.find({
    where: {
      upc: productUPC
    },
    include: [Users]
  })
  .then((gotProduct) => {
    let comments = gotProduct.Users.map((user) => {
      let comment = user.dataValues.Users_Products.dataValues.comment;
      let rating = user.dataValues.Users_Products.dataValues.rating;
      return [rating, comment];
    });

    foodData.commRate = comments;
    foodData.averageRate = gotProduct.dataValues.averageRating;
    res.send(foodData);
  })
  .catch((err) => {
    console.log('Error in getting product ===> ', err);
    return err;
  });
};
