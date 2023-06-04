import User from '../models/user';

class UserController {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      return res.status(200).json(
        newUser,
      );
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      return res.status(200).json(user);
    } catch {
      return res.json({
        errors: ['User not found'],
      });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Id not found'],
        });
      }
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['User not found'],
        });
      }

      const newUserData = await user.update(req.body);
      return res.status(200).json(newUserData);
    } catch {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['Id not found'],
        });
      }
      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['User not found'],
        });
      }

      await user.destroy();
      return res.status(200);
    } catch {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }
}

export default new UserController();
