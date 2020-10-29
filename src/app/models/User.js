const Sequelize = require('sequelize');
const Model = Sequelize.Model

class User extends Model {
  static init(sequelize) {
    super.init({
      name: Sequelize.STRING,   
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      rg: Sequelize.STRING,
      cpf: Sequelize.STRING,
      address: Sequelize.STRING,
      phone: Sequelize.STRING,
      city: Sequelize.STRING,
      neigh: Sequelize.STRING,
      state: Sequelize.STRING,
    }, {

      sequelize

    });
  }
}


module.exports = User;