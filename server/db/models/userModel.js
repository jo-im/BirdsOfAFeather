import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';

// Users model
export const Users = sequelize.define ('User', {
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  facebookId: {type: Sequelize.STRING, unique: true},
  profilePictUrl: Sequelize.STRING,
  allergies: Sequelize.ARRAY(Sequelize.STRING),
  diets: Sequelize.ARRAY(Sequelize.STRING)
});
