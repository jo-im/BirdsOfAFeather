'use strict';

var _dbConnection = require('../dbConnection');

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _userModel = require('../models/userModel');

var _concernModel = require('../models/concernModel');

var _userConcernsModel = require('../models/userConcernsModel');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Initialize DB schema on Heroku
_dbConnection.sequelize.sync({ force: true }).then(function (err) {
  console.log('Successfully created tables');
}, function (err) {
  console.log('An error occured while trying to create tables');
  console.log(err);
});