import prisma from '../lib/prisma.js';

class authController {
  async registration(req, res) {
    try {
      console.log('User registration started')

      const { email, firstname, lastname, phone, password } = req.body;

      const candidate = await prisma.users.findFirst({ where: { email } });

      if (candidate) {
        console.log('User already exists')

        return res.status(500).json({ message: 'A user with the same username already exists' });
      }

      const newUser = await prisma.users.create({
        data: {
          firstname,
          lastname,
          email,
          phone,
          password,
        }
      });

      console.log('User successfully registered')

      return res.json({ message: 'User successfully registered' });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: 'Error during registration' });
    }
  }

  async login(req, res) {
    try {
      res.json('server work')
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: 'Login error' })
    }
  }

  async getUsers(req, res) {
    try {
      res.json('server work')
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: 'getUsers error' })
    }
  }
}

export default new authController();