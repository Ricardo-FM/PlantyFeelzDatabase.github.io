CREATE DATABASE botani_dex;

Use botani_dex;

CREATE TABLE plants
(
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL);

CREATE TABLE genus
(
  genus_id INT AUTO_INCREMENT NOT NULL,
  genus_name VARCHAR(30),
  PRIMARY KEY (genus_id),
  FOREIGN KEY (genus_id) REFERENCES plants(id)
);

CREATE TABLE maintenance (
  maintenance_id INT AUTO_INCREMENT NOT NULL,
  water VARCHAR(30),
  temperature DECIMAL,
  light VARCHAR(30),
  humidity VARCHAR(30),
  soil VARCHAR(30),
  PRIMARY KEY (maintenance_id),
  FOREIGN KEY (maintenance_id) REFERENCES plants (id)
);