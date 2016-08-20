import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';
import {Users} from '../models/userModel';
import {Users_Friends} from '../models/usersFriendsModel';

// Update users friends
export const setUserFriends = (user) => {
  let selectedUser = JSON.parse(user.event.data);
  let friendsList = selectedUser.friends;
  let testFriends = [1043356799875649515, 28627348628756593]

  console.log('user is========', selectedUser);

  Users
    .findAll({
      where: {
        facebookId: testFriends
      }
    })
    .then((user) => {
      console.log('found users', user);
    })
};
