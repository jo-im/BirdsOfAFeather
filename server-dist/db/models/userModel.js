'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Users = undefined;

var _dbConnection = require('../dbConnection');

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Users model
var Users = exports.Users = _dbConnection.sequelize.define('User', {
  name: _sequelize2.default.STRING,
  facebookId: { type: _sequelize2.default.BIGINT, unique: true },
  facebookAccessToken: _sequelize2.default.STRING
});