import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';
import {Users} from '../models/userModel';
import Users_Products from '../models/usersProductsModel';

export const getAllUsersProducts = (user) => {

  return user.getProducts()
    .then((userProducts) => {
      console.log('success in grabbing user products', userProducts);
      return userProducts;
    })
    .catch((err) => {
      console.log('Error in getting products ===> ', err);
      return err;
    });
};
