DROP DATABASE IF EXISTS shop;
CREATE DATABASE shop;

USE shop;

CREATE TABLE user(
userid int NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50),
password VARCHAR(50)
);

CREATE TABLE item(
itemid int NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(50)
);

CREATE TABLE boughtItem(
boughtid int NOT NULL AUTO_INCREMENT PRIMARY KEY,
userid int,
itemid int,
FOREIGN KEY (userid) REFERENCES user (userid),
FOREIGN KEY (itemid) REFERENCES item (itemid)
);

INSERT INTO user (name,password) VALUES ("admin","admin");

INSERT INTO item (name) VALUES ("objetoTest");


