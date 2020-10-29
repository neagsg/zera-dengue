const Sequelize = require('sequelize');
const User = require('../app/models/User');
const Description = require('../app/models/Description');
const databaseConfig = require('../config/database');

const models = [User, Description];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));

  }
}

module.exports = new Database;