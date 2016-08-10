import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';

// Users model
export const Users = sequelize.define ('User', {
  name: Sequelize.STRING,
  facebookId: {type: Sequelize.BIGINT, unique: true},
  facebookAccessToken: Sequelize.STRING
});
