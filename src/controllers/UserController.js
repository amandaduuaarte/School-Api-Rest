import User from '../models/user';

class UserController {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
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
      const users = await User.findAll({ attributes: ['id', 'name', 'email'] });
      // Atributes me permite escolher o que quero exibir
      return res.status(200).json(users);
    } catch {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const {
        id, name, email, category,
      } = user;

      return res.status(200).json({
        id, name, email, category,
      });
    } catch {
      return res.json({
        errors: ['User not found'],
      });
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

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
    } catch {
      return res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

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
