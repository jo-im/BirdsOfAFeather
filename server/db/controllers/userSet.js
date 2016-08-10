import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';
import {Concerns} from '../models/concernModel';
import User_Concerns from '../models/userConcernsModel';
import {Users} from '../models/userModel';

export const setNewUser = (user) => {
  Users.findOrCreate({
    where: {
      name: user.name,
      facebookId: user.facebookId,
      facebookAccessToken: user.token
    }
  })
  .then((user) => {
    console.log('Success in setting user');
    return user;
  })
  .catch((err) => {
    console.log('Error in setting user ===> ', err);
    return undefined;
  });
};

// 1	Ryan	123	faketokenhere	2016-08-09 21:18:25.46+00	2016-08-09 21:18:25.46+00
console.log(setNewUser({
  name: 'Ryan3',
  facebookId: 222,
  token: 'ajksdhlfk'
}));
