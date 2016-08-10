import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';

// Concerns model
export const Concerns = sequelize.define ('Concerns', {
  name: Sequelize.STRING,
  subConcern: Sequelize.STRING,
  majorConcern: Sequelize.STRING
});
