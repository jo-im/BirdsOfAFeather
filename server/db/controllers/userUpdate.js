import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';
import {Users} from '../models/userModel';

export const setUserUpdate = (user) => {
  let selectedUser = user;

  console.log('Trying to update user');

  return Users.update(
    {
      username: selectedUser.username,
      profilePictUrl: selectedUser.url,
      allergies: selectedUser.allergies,
      diets: selectedUser.diets,
      email: selectedUser.email
    },
    { where: { facebookId: selectedUser.userId } }
  )
  .then((updatedUser) => {
    console.log('Success in updating user');
    return updatedUser;
  })
  .catch((err) => {
    console.log('Error in setting user ===> ', err);
    return err;
  });
};
