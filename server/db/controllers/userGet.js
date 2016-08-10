import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';
import {Users} from '../models/userModel';

// Confirm user has account
export const confirmUser = (facebookID) => {
  Users.find({
    where: {
      facebookId: facebookID
    }
  })
  .then((user) => {
    console.log('success', user.dataValues);
    return user.dataValues;
  })
  .catch((err) => {
    console.log('Error finding user ===>', err);
    return undefined;
  });
};
