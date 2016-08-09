'use strict';

var _dbConnection = require('../dbConnection');

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _concernModel = require('../models/concernModel');

var _concernData = require('./concernData');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_concernModel.Concerns);

_concernData.concernsList.forEach(function (concern) {
  _concernModel.Concerns.build({
    name: concern[0],
    subConcern: concern[1],
    majorConcern: concern[2]
  }).save().then(function () {
    console.log('Created Concern', concern[0]);
  });
});