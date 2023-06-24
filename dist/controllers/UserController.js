"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _user = require('../models/user'); var _user2 = _interopRequireDefault(_user);

class UserController {
  async store(req, res) {
    try {
      const newUser = await _user2.default.create(req.body);
      const {
        id, name, email, category,
      } = newUser;
      return res.status(200).json(
        {
          id, name, email, category,
        },
      );
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await _user2.default.findAll({ attributes: ['id', 'name', 'email', 'category'] });
      // Atributes me permite escolher o que quero exibir
      return res.status(200).json(users);
    } catch (e2) {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await _user2.default.findByPk(req.params.id);
      const {
        id, name, email, category,
      } = user;

      return res.status(200).json({
        id, name, email, category,
      });
    } catch (e3) {
      return res.json({
        errors: ['User not found'],
      });
    }
  }

  async update(req, res) {
    try {
      const user = await _user2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['User not found'],
        });
      }

      const newUserData = await user.update(req.body);
      const {
        id, name, email, category,
      } = newUserData;
      return res.status(200).json({
        id, name, email, category,
      });
    } catch (e4) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const user = await _user2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['User not found'],
        });
      }

      await user.destroy();
      return res.status(200);
    } catch (e5) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }
}

exports. default = new UserController();
