import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';
import {Users} from './userModel';

// Join model -  users and associated friends.
const Users_Follows = sequelize.define ('Users_Follows', {

});

Users.belongsToMany(Users, {
  as: 'follows',
  through: 'Users_Follows',
  foreignKey: 'userId'
});

export default Users_Follows;
