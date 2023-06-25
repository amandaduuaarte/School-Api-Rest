"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

_dotenv2.default.config();

require('./database');

var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _home = require('./routes/home'); var _home2 = _interopRequireDefault(_home);
var _user = require('./routes/user'); var _user2 = _interopRequireDefault(_user);
var _token = require('./routes/token'); var _token2 = _interopRequireDefault(_token);
var _student = require('./routes/student'); var _student2 = _interopRequireDefault(_student);
var _profile = require('./routes/profile'); var _profile2 = _interopRequireDefault(_profile);
var _file = require('./routes/file'); var _file2 = _interopRequireDefault(_file);
var _studentFile = require('./routes/studentFile'); var _studentFile2 = _interopRequireDefault(_studentFile);

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    this.app.use('/images/', _express2.default.static(_path.resolve.call(void 0, __dirname, 'uploads', '..', 'images')));
  }

  routes() {
    this.app.use('/', _home2.default);
    this.app.use('/users/', _user2.default);
    this.app.use('/tokens/', _token2.default);
    this.app.use('/students/', _student2.default);
    this.app.use('/profile/', _profile2.default);
    this.app.use('/files/', _file2.default);
    this.app.use('/student_file/', _studentFile2.default);
  }
}

exports. default = new App().app;
