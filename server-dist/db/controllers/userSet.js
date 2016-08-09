'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setNewUser = undefined;

var _dbConnection = require('../dbConnection');

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _concernModel = require('../models/concernModel');

var _userConcernsModel = require('../models/userConcernsModel');

var _userConcernsModel2 = _interopRequireDefault(_userConcernsModel);

var _userModel = require('../models/userModel');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setNewUser = exports.setNewUser = function setNewUser(user) {
  _userModel.Users.findOrCreate({
    where: {
      name: user.name,
      facebookId: user.facebookId,
      facebookAccessToken: user.token
    }
  }).then(function (user) {
    console.log('Success in setting user');
    return user;
  }).catch(function (err) {
    console.log('Error in setting user ===> ', err);
    return undefined;
  });
};