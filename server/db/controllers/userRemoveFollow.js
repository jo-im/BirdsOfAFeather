import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';
import {Users} from '../models/userModel';
import Users_Follows from '../models/usersFollowers';

export const removeUserFollowing = (user, following) => {
  let followingId = following.dataValues.id;
  let usersId = user.dataValues.id;

  return Users_Follows.destroy({
    where: {
      userId: usersId,
      followId: followingId
    }
  })
  .then((userFollowing) => {
    console.log('success in destroying user following');
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
    confirmUser(123456)])
    .then(function (data) {
      console.log('######## HAVE PROMISES???', typeof data[0]);
      removeUserFollowing(data[0], data[1]);
    });
};

settingUserFoll();
