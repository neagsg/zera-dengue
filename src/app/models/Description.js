const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class Description extends Model {
  static init(sequelize) {
    super.init({
      address: Sequelize.STRING,
      description: Sequelize.STRING,
    }, {
      sequelize
    })
  }
}

module.exports = Description;
