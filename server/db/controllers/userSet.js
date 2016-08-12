import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';
import {Concerns} from '../models/concernModel';
import User_Concerns from '../models/userConcernsModel';
import {Users} from '../models/userModel';

export const setNewUser = (user, response) => {
  let selectedUser = JSON.parse(user.event.data);

  console.log('Trying to set new user');

  Users.findOrCreate({
    where: {
      username: selectedUser.username,
      email: selectedUser.email,
      facebookId: selectedUser.id,
      friends: selectedUser.friends
    }
  })
  .then((selectedUser) => {
    console.log('Success in setting user');
    if (response) {
      response.send(JSON.stringify(selectedUser));
    }

    return selectedUser;
  })
  .catch((err) => {
    console.log('Error in setting user ===> ', err);
    return err;
  });
};
