const Sequelize = require('sequelize');

const sequelize = new Sequelize('sqlite:db/event_manager.db');

module.exports = sequelize;