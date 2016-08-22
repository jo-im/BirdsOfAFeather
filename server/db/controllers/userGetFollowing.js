import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';
import {Users} from '../models/userModel';
import Users_Follows from '../models/usersFollowers';

export const getAllUsersFollows = (user) => {

  return user.getFollows()
    .then((userFollowing) => {
      console.log('success in grabbing user following');
      return userFollowing;
    })
    .catch((err) => {
      console.log('Error in setting userfollowing ===> ', err);
      return err;
    });
};
