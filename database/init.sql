BEGIN;

DROP TABLE IF EXISTS user,Admin,password,myFavorite;

  

CREATE TABLE user (
  id VARCHAR(9) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL,
  role VARCHAR(15) NOT NULL
);

CREATE TABLE password (
  id serial PRIMARY KEY,
  password  VARCHAR(255),
  userID VARCHAR(9) REFERENCES users(id)
);

CREATE TABLE myFavorite(
id serial PRIMARY KEY,
userID VARCHAR(9) REFERENCES users(id),
animalID VARCHAR(15) not null, 
animalPhoto text,
animalName VARCHAR(255),
animalSize VARCHAR(15),
animalStatus VARCHAR(15)


)


INSERT INTO users (id,name,username,role) VALUES
  ('123456789','Admin', 'admin','admin');
 INSERT INTO password (password,userID) VALUES 
  ('1234','123456789')

COMMIT;