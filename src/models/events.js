const Sequelize = require("sequelize");
const sequelize = require("../sequelize");

const Event = sequelize.define(
  "event",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    event_type: Sequelize.STRING,
    event_date: Sequelize.STRING,
    title: Sequelize.STRING,
    speaker: Sequelize.STRING,
    host: Sequelize.STRING,
    published: Sequelize.BOOLEAN
  }
);

module.exports = Event;