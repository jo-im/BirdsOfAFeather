'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Concerns = undefined;

var _dbConnection = require('../dbConnection');

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Concerns model
var Concerns = exports.Concerns = _dbConnection.sequelize.define('Concerns', {
  name: _sequelize2.default.STRING,
  subConcern: _sequelize2.default.STRING,
  majorConcern: _sequelize2.default.STRING
});