import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';

// Users model
export const Users = sequelize.define ('User', {
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  facebookId: {type: Sequelize.BIGINT, unique: true},
  friends: Sequelize.ARRAY(Sequelize.STRING)
});
