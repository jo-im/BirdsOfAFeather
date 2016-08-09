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
    console.log('success', concerns);
    return concerns.dataValues;
  })
  .catch((err) => {
    console.log('Error finding concerns ===>', err);
    return undefined;
  });
};

getUserConcerns({id: 1});
// 1	Ryan	123	faketokenhere	2016-08-09 21:18:25.46+00	2016-08-09 21:18:25.46+00
