import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';
import {Users} from './userModel';
import {Products} from './productModel';

// Join model - products and users. User for commenting, favoriting,
// and rating

const Users_Products = sequelize.define ('Users_Products', {
  favorite: Sequelize.BOOLEAN,
  rating: Sequelize.INTEGER,
  comment: Sequelize.STRING(1000)
});

// Create foreign key constraings within join table
Users.hasMany(Products);
Users.belongsToMany(Products, { through: Users_Products });
Products.belongsToMany(Users, { through: Users_Products });

export default Users_Products;
