-- TABLE
CREATE TABLE event
(
  id integer primary key,
  event_type TEXT NOT NULL,
  event_date TEXT NOT NULL,
  title TEXT NOT NULL,
  speaker TEXT,
  host TEXT,
  published INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE user
(
  email TEXT PRIMARY KEY,
  passwordHash TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);
