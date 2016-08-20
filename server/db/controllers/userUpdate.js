import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';
import {Users} from '../models/userModel';

export const setUserUpdate = (user) => {
  let selectedUser = JSON.parse(user.data);

  console.log('Trying to update user');

  Users.update(
    {
      username: selectedUser.username,
      profilePictUrl: selectedUser.url,
      concerns: selectedUser.concerns,
      email: selectedUser.email
    },
    { where: { facebookId: selectedUser.id } }
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
