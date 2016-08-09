import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';
import {Users} from '../models/userModel';
import {Concerns} from '../models/concernModel';
import {User_Concerns} from '../models/userConcernsModel';

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
