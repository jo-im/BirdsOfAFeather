import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';

// products model
export const Products = sequelize.define ('Product', {
  upc: Sequelize.INTEGER,
  refreshTime: Sequelize.DATE,
  foodFacts: Sequelize.JSON
});
