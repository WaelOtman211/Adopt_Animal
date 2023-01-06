BEGIN;

DROP TABLE IF EXISTS users,myFavorite;

  

CREATE TABLE users (
  id serial PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password  VARCHAR(255)
);


 CREATE TABLE myFavorite(
id serial PRIMARY KEY,
userID VARCHAR(9),
animalID VARCHAR(15) not null, 
animalPhoto text,
animalName VARCHAR(255),
animalSize VARCHAR(15),
animalStatus VARCHAR(15)
); 

CREATE TABLE adoptHistory(
id serial PRIMARY KEY,
userID VARCHAR(9),
animalID VARCHAR(15) not null, 
animalPhoto text,
animalName VARCHAR(255),
animalSize VARCHAR(15),
animalStatus VARCHAR(15),
adoptDate date
);

COMMIT;