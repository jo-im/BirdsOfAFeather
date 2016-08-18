import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';
import {Users} from './userModel';

// Join model -  users and associated friends.
const Users_Friends = sequelize.define ('Users_Friends', {

});

Users.belongsToMany(Users, {
  as: 'friends',
  through: 'Users_Friends',
  foreignKey: 'userId'
});

export default Users_Friends;
