'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.confirmUser = undefined;

var _dbConnection = require('../dbConnection');

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _userModel = require('../models/userModel');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Confirm user has account
var confirmUser = exports.confirmUser = function confirmUser(facebookID) {
  _userModel.Users.find({
    where: {
      facebookId: facebookID
    }
  }).then(function (user) {
    console.log('success', user.dataValues);
    return user.dataValues;
  }).catch(function (err) {
    console.log('Error finding user ===>', err);
    return undefined;
  });
};