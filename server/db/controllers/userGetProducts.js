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

/////// TESTING
import {confirmUser} from './userGet';
import Promise from 'bluebird';

let findProds = () => {

  Promise.all([
    confirmUser(10153734367142146)])
    .then(function (data) {
      console.log('######## HAVE PROMISES???', typeof data[0]);
      getAllUsersProducts(data[0]);
    });
};

findProds();
