"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _user = require('../models/user'); var _user2 = _interopRequireDefault(_user);

class TokenController {
  async store(req, res) {
    const { email, password } = req.body;

    console.log(req.body);

    if (!email || !password) {
      return res.status(401).json({ errors: ['Email and password are required'] });
    }
    const user = await _user2.default.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ errors: ['User not found.'] });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({ errors: ['Password invalid'] });
    }
    const { id } = user;
    const token = _jsonwebtoken2.default.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.status(200).json({
      token,
    });
  }
}

exports. default = new TokenController();
