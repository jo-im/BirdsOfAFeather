import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';
import {Users} from '../models/userModel';
import {Users_Follows} from '../models/usersFollowers';

export const addUserFollowing = (user, following) => {

  return user.addFollow(following)
    .then((userFollowing) => {
      console.log('success in creating user following');
      return userFollowing;
    })
    .catch((err) => {
      console.log('Error in setting userfollowing ===> ', err);
      return err;
    });
};
