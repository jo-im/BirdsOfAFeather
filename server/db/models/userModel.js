import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';

// Users model
export const Users = sequelize.define ('User', {
  name: Sequelize.STRING,
  facebookId: Sequelize.BIGINT,
  facebookAccessToken: Sequelize.STRING
});
