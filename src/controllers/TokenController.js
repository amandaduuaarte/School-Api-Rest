import jwt from 'jsonwebtoken';
import User from '../models/user';

class TokenController {
  async store(req, res) {
    const { email, password } = req.body;

    console.log(req.body);

    if (!email || !password) {
      return res.status(401).json({ errors: ['Email and password are required'] });
    }
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ errors: ['User not found.'] });
    }

    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({ errors: ['Password invalid'] });
    }
    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    return res.status(200).json({
      token,
      user: { name: user.name, email: user.email, id },
    });
  }
}

export default new TokenController();
