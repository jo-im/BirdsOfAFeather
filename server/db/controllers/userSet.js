import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';
import {Users} from '../models/userModel';

export const setNewUser = (user, response) => {
  let selectedUser = JSON.parse(user.data);

  console.log('Trying to set new user');

  return Users.findOrCreate({
    where: {
      username: selectedUser.username,
      email: selectedUser.email,
      facebookId: selectedUser.id,
      profilePictUrl: selectedUser.url,
      concerns: selectedUser.concerns
    }
  })
  .then((newUser) => {
    console.log('Success in setting user');
    return newUser;
  })
  .catch((err) => {
    console.log('Error in setting user ===> ', err);
    return err;
  });
};
