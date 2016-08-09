'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUserConcerns = undefined;

var _dbConnection = require('../dbConnection');

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _concernModel = require('../models/concernModel');

var _userConcernsModel = require('../models/userConcernsModel');

var _userConcernsModel2 = _interopRequireDefault(_userConcernsModel);

var _userModel = require('../models/userModel');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO - refactor for multiple concern setting

var setUserConcerns = exports.setUserConcerns = function setUserConcerns(userConcern, user) {

  _userModel.Users.find({
    where: {
      id: user.id
    }
  }).then(function (user) {
    _concernModel.Concerns.find({
      where: {
        name: userConcern[0].name
      }
    }).then(function (concern) {
      user.addConcerns(concern);
    }).then(function () {
      console.log('success in creating user concerns');
    }).catch(function (err) {
      console.log('Error creating concerns ===>', err);
      return undefined;
    });
  });
};

// 1	Ryan	123	faketokenhere	2016-08-09 21:18:25.46+00	2016-08-09 21:18:25.46+00
var testUser = {
  id: 1,
  facebookId: 222,
  token: 'ajksdhlfk'
};

var testConcerns = [{
  id: 1,
  name: 'peanuts',
  subConcern: 'allergy',
  majorConcern: 'health'
}];

setUserConcerns(testConcerns, testUser);