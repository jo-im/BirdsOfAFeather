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
    if (gotProduct) {
      let comments = gotProduct.Users.map((user) => {
        console.log('user ****', user);
        let userName = user.dataValues.username;
        let userId = user.dataValues.facebookId;
        let comment = user.dataValues.Users_Products.dataValues.comment;
        let rating = user.dataValues.Users_Products.dataValues.rating;
        return {
          userName: userName,
          userId: userId,
          comment: comment,
          rating: rating
        };
      });
    }

    foodData.commRate = comments || [];
    foodData.averageRate = gotProduct.dataValues.averageRating || 0;

    res.send(foodData);
  })
  .catch((err) => {
    console.log('Error in getting product ===> ', err);
    return err;
  });
};
