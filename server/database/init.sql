BEGIN;

DROP TABLE IF EXISTS users,Admin,password;

CREATE TABLE users (
  id serial PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password  VARCHAR(255) 
  
);

COMMIT;