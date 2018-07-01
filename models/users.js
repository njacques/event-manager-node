const path = require("path");
const sqlite3 = require("sqlite3").verbose();
const bcrypt = require("bcryptjs");

const db = new sqlite3.Database(path.join(__dirname, '..', 'db', 'event_manager.sqlt'), (err) => console.error(err));

module.exports = {
  add(email, password) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const date = new Date();

    return new Promise((resolve, reject) => {
      db.run(
        "INSERT INTO user (email, passwordHash, created_at, updated_at) VALUES ($email, $passwordHash, $createdAt, $updatedAt)",
        {
          $email: email,
          $passwordHash: hash,
          $createdAt: date.toISOString(),
          $updatedAt: date.toISOString()
        },
        (err) => err ? reject(err) : resolve()
      );
    });
  },

  fetchAll() {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM user", (err, users) => {
        if (err) reject(err);
        else resolve(users);
      });
    });
  }
};
