import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';
import {Concerns} from '../models/concernModel';
import User_Concerns from '../models/userConcernsModel';
import {Users} from '../models/userModel';

// TODO - refactor for multiple concern setting

export const setUserConcerns = (userConcern, user) => {

  Users
    .find({
      where: {
        id: user.id
      }
    })
    .then((user) => {
      Concerns
        .find({
          where: {
            name: userConcern[0].name
          }
        })
        .then((concern) => {
          user.addConcerns(concern);
        })
        .then(() => {
          console.log('success in creating user concerns');
        })
        .catch((err) => {
          console.log('Error creating concerns ===>', err);
          return undefined;
        });
    });
};

// 1	Ryan	123	faketokenhere	2016-08-09 21:18:25.46+00	2016-08-09 21:18:25.46+00
let testUser = {
  id: 1,
  facebookId: 222,
  token: 'ajksdhlfk'
};

let testConcerns = [
  {
    id: 1,
    name: 'peanuts',
    subConcern: 'allergy',
    majorConcern: 'health'
  }
];

setUserConcerns(testConcerns, testUser);
