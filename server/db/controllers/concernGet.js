import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';
import {Concerns} from '../models/concernModel';
import User_Concerns from '../models/userConcernsModel';
import {Users} from '../models/userModel';

// Grab user concerns
export const getUserConcerns = (user) => {
  let userId = user.id;

  Concerns.findAll({
    include: [{
      model: Users,
      where: {
        id: userId
      }
    }]
  })
  .then((concerns) => {
    console.log('Success in finding concerns');
    return (concerns.map((concern) => {
      return concern.dataValues;
    }));
  })
  .catch((err) => {
    console.log('Error finding concerns ===>', err);
    return undefined;
  });
};
