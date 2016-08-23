import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';

// products model
export const Products = sequelize.define ('Product', {
  upc: Sequelize.STRING,
  refreshTime: Sequelize.DATE,
  foodFacts: Sequelize.JSON,
  totalNumRatings: {type: Sequelize.INTEGER, defaultValue: 0},
  averageRating: {type: Sequelize.INTEGER, defaultValue: 0}
});
