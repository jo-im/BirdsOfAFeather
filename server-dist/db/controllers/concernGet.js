'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserConcerns = undefined;

var _dbConnection = require('../dbConnection');

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _concernModel = require('../models/concernModel');

var _userConcernsModel = require('../models/userConcernsModel');

var _userConcernsModel2 = _interopRequireDefault(_userConcernsModel);

var _userModel = require('../models/userModel');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Grab user concerns
var getUserConcerns = exports.getUserConcerns = function getUserConcerns(user) {
  var userId = user.id;

  _concernModel.Concerns.findAll({
    include: [{
      model: _userModel.Users,
      where: {
        id: userId
      }
    }]
  }).then(function (concerns) {
    console.log('Success in finding concerns');
    return concerns.map(function (concern) {
      return concern.dataValues;
    });
  }).catch(function (err) {
    console.log('Error finding concerns ===>', err);
    return undefined;
  });
};