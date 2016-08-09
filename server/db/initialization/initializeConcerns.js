import {sequelize} from '../dbConnection';
import Sequelize from 'sequelize';
import {Concerns} from '../models/concernModel';
import {concernsList} from './concernData';

console.log(Concerns);

concernsList.forEach((concern) => {
  Concerns
    .build({
      name: concern[0],
      subConcern: concern[1],
      majorConcern: concern[2]
    })
    .save()
    .then(() => {
      console.log('Created Concern', concern[0]);
    });
});
