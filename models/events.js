const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("../db/event_manager.sqlt");

module.exports = {
  seedDB() {
    db.run(
      "INSERT INTO event (event_type, event_date, title, speaker, host) VALUES ",
      {
        $id: 2,
        $name: "bar"
      }
    );
  }
};
