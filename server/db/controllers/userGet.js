import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';
import {Users} from '../models/userModel';

// Confirm user has account
export const confirmUser = (facebookID) => {

  return Users.find({
    where: {
      facebookId: facebookID
    }
  })
  .then((user) => {
    console.log('success');
    return user;
  })
  .catch((err) => {
    console.log('Error finding user ===>', err);
    return err;
  });
};

// console.log(confirmUser(10153734367142146));
