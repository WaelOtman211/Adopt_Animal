BEGIN;

DROP TABLE IF EXISTS users,Admin,password;

CREATE TABLE Admin (
  id serial PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL
  
);
CREATE TABLE users (
  id serial PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL
  
);

CREATE TABLE password (
  id serial PRIMARY KEY,
  password  VARCHAR(255),
  userID int REFERENCES users(id)
);


INSERT INTO Admin (name, username) VALUES
  ('souheil', 'skittan');
  
  INSERT INTO users (name, username) VALUES
  ('wael', 'waelO');

  INSERT INTO users (name, username) VALUES
  ('noor', 'naborhal');

COMMIT;