DROP DATABASE IF EXISTS burgers_db;

-- Created the DB "burgers_db" (only works on local connections)
CREATE DATABASE burgers_db;

-- Use the DB burgers_db for all the rest of the script
USE burgers_db;

CREATE TABLE burger
(
id int NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(60) NOT NULL,
devoured BOOLEAN,
PRIMARY KEY (id)
);