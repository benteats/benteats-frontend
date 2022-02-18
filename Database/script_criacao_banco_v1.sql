CREATE TABLE benteats;
USE benteats;

CREATE TABLE tb_user (
	id_user INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(60),
    UF CHAR(2),
    city VARCHAR(60)
) AUTO_INCREMENT = 1;

CREATE TABLE tb_favorite (
	id_favorite INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name_resturante VARCHAR(60),
    name_favorite VARCHAR(60),
    id_user INT,
    FOREIGN KEY (id_user) REFERENCES tb_user (id_user),
    id_food int,
    FOREIGN KEY (id_food) REFERENCES tb_food (id_food),
    id_avaliation int,
    FOREIGN KEY (id_avaliation) REFERENCES tb_avaliation (id_avaliation),
    id_restaurant int,
    FOREIGN KEY (id_restaurant) REFERENCES tb_client_restaurant (id_client)
) AUTO_INCREMENT = 1;

CREATE TABLE tb_avaliation (
	id_avaliation INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    rate_restaurant INT,
    rate_food INT,
    name_user VARCHAR(60),
    dt_avaliation DATETIME,
    id_food INT,
    FOREIGN KEY (id_food) REFERENCES tb_food (id_food),
	id_restaurant INT,
    FOREIGN KEY (id_restaurant) REFERENCES tb_client_restaurant (id_client)
) AUTO_INCREMENT = 1;

CREATE TABLE tb_client_restaurant (
	id_client INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name_client VARCHAR(60),
    UF CHAR(2),
    city VARCHAR(60),
    address VARCHAR(60),
    name_restaurant VARCHAR(60)
) AUTO_INCREMENT = 1;

CREATE TABLE tb_food (
	id_food INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name_food VARCHAR(60),
    price_food DECIMAL(18,2),
    dt_insert DATETIME,
    id_restaurant INT,
    FOREIGN KEY (id_restaurant) REFERENCES tb_client_restaurant (id_client)
) AUTO_INCREMENT = 1;
    
    