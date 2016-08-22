import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';
import {Users} from '../models/userModel';

export const setNewUser = (user) => {
  console.log('Trying before parse', user.body);
  let selectedUser = user.body;

  console.log('Trying to set new user');

  return Users.findOrCreate({
    where: {
      username: selectedUser.username,
      email: selectedUser.email,
      facebookId: selectedUser.userId,
      profilePictUrl: selectedUser.pictureURL,
      allergies: selectedUser.allergies,
      diets: selectedUser.diets
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
