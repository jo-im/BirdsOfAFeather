import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';
import {Concerns} from '../models/concernModel';
import User_Concerns from '../models/userConcernsModel';
import {Users} from '../models/userModel';

export const setNewUser = (user) => {
  console.log('TRYING TO SET NEW USER', JSON.parse(user.event.data));
  let selectedUser = JSON.parse(user.event.data);
  Users.findOrCreate({
    where: {
      username: selectedUser.username,
      email: selectedUser.email,
      facebookId: selectedUser.id
      // friends: selectedUser.friends
    }
  })
  .then((selectedUser) => {
    console.log('Success in setting user');
    return selectedUser;
  })
  .catch((err) => {
    console.log('Error in setting user ===> ', err);
    return undefined;
  });
};
