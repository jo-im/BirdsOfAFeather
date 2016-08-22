import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';
import {Products} from '../models/productModel';
import {Users_Products} from '../models/usersProductsModel';
import {Users} from '../models/userModel';

export const addProductCommRate = (product, user, data) => {
  let additionalInfo = JSON.parse(data);

  return user.addProduct(product, {
    rating: additionalInfo.rating,
    comment: additionalInfo.comment
  })
  .then((userProduct) => {
    console.log('success in creating user comment/rating');
    return userProduct;
  })
  .catch((err) => {
    console.log('Error in setting product comm/rating ===> ', err);
    return err;
  });
};

// /////// TESTING
// import {confirmUser} from './userGet';
// import {getProduct} from './productGet';
// import Promise from 'bluebird';
//
// let testdata = {};
// testdata.data = JSON.stringify({
//   upc: 1234567890,
// });
// let testComm = {};
// testComm = JSON.stringify({
//   rating: 5,
//   comment: 'This is just a test comm'
// });
//
// let settingProductComm = () => {
//
//   Promise.all([
//     confirmUser(10153734367142146),
//     getProduct(testdata)])
//     .then(function (data) {
//       console.log('######## HAVE PROMISES???', typeof data[0]);
//       addProductCommRate(data[1], data[0], testComm);
//     });
// };
//
// settingProductComm();
