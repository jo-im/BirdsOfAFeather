import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';
import {Users} from '../models/userModel';
import {Products} from '../models/productModel';
import {Users_Friends} from '../models/usersFriendsModel'
import {Users_Products} from '../models/usersProductsModel'

// Initialize DB schema on Heroku
sequelize
  .sync({force: true})
  .then((err) => {
    console.log('Successfully created tables');
  }, (err) => {
    console.log('An error occured while trying to create tables');
    console.log(err);
  }
);
