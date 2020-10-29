const User = require('../models/User');

class UserController {
  async store(req, res) {
    const {
      id,
      name,
      email,
      password,
      rg,
      cpf,
      address,
      phone,
      city,
      neigh,
      state,
    } = await User.create(req.body);

    return res.redirect('./location');
  }
}

module.exports = new UserController;