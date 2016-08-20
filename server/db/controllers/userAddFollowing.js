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

/////// TESTING
import {confirmUser} from './userGet';
import Promise from 'bluebird';

let settingUserFoll = () => {

  Promise.all([
    confirmUser(10153734367142146),
    confirmUser(111111)])
    .then(function (data) {
      console.log('######## HAVE PROMISES???', typeof data[0]);
      addUserFollowing(data[0], data[1]);
    });
};

settingUserFoll();
