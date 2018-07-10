const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Sequelize = require("sequelize");
const sequelize = require("../sequelize");

const User = sequelize.define(
  "user",
  {
    email: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    passwordHash: Sequelize.STRING
  },
  {
    setterMethods: {
      password(value) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(value, salt);

        this.setDataValue("passwordHash", hash);
      }
    }
  }
);

User.prototype.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

User.prototype.generateJWT = function generateJWT() {
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign({
    email: this.email,
    exp: parseInt(expirationDate.getTime() / 1000, 10),
  }, 'secret');
}

User.prototype.toAuthJSON = function toAuthJSON() {
  return {
    email: this.email,
    token: this.generateJWT(),
  };
};

module.exports = User;
