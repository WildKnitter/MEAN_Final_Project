drop database HCA;
create database HCA;
use HCA;

create table users (
	ID		 	int(10) NOT NULL AUTO_INCREMENT, 
	username 	varchar(50) NOT NULL, 
	email 		varchar(50) NOT NULL, 
    password	varchar(50) NOT NULL, 
	is_admin	varchar(1) NOT NULL DEFAULT 0,
	createdAt  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	updatedAt  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	UNIQUE		UQ_USER_1 (username),
	PRIMARY KEY(ID)
);

INSERT INTO users (ID, username, email, password, is_admin) VALUES (1, 'foobar', 'foobar@test.com', 'password', '0');
INSERT INTO users (ID, username, email, password, is_admin) VALUES (2, 'finkyfoo', 'finkyfoo@test.com', 'password', '0');
INSERT INTO users (ID, username, email, password, is_admin) VALUES (3, 'pbelknap', 'pbelknap@cox.com', 'password', '1');
INSERT INTO users (ID, username, email, password, is_admin) VALUES (4, 'curly', 'curly@gmail.com', 'password', '1');
INSERT INTO users (ID, username, email, password, is_admin) VALUES (5, 'bethm', 'platosmom@test.com', 'test', '0');
INSERT INTO users (ID, username, email, password, is_admin) VALUES (6, 'aradia', 'aradia@test.com', 'test', '0');

#SELECT * FROM users;
#SELECT * FROM users WHERE is_admin = "0";
#SELECT username, password FROM users WHERE ID = 1;
#INSERT INTO users (ID, username, email, password, is_admin) VALUES (7, 'bizbaz', 'bizbaz@test.com', 'password', '0');
#UPDATE users SET email = 'bizbaz123@test.com' WHERE ID = 7;
#DELETE FROM users WHERE ID = 7;