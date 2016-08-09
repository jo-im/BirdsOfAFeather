'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dbConnection = require('../dbConnection');

var _userModel = require('./userModel');

var _concernModel = require('./concernModel');

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Join model
var User_Concerns = _dbConnection.sequelize.define('User_Concerns', {});

// Create foreign key constraints within join table
_userModel.Users.hasMany(_concernModel.Concerns);
_concernModel.Concerns.belongsToMany(_userModel.Users, { through: User_Concerns });
_userModel.Users.belongsToMany(_concernModel.Concerns, { through: User_Concerns });

exports.default = User_Concerns;