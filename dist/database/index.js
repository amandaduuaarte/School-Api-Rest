"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _student = require('../models/student'); var _student2 = _interopRequireDefault(_student);
var _user = require('../models/user'); var _user2 = _interopRequireDefault(_user);
var _profile = require('../models/profile'); var _profile2 = _interopRequireDefault(_profile);
var _file = require('../models/file'); var _file2 = _interopRequireDefault(_file);
var _studentFile = require('../models/studentFile'); var _studentFile2 = _interopRequireDefault(_studentFile);

const models = [_student2.default, _user2.default, _profile2.default, _file2.default, _studentFile2.default];

const connection = new (0, _sequelize2.default)(_database2.default);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
