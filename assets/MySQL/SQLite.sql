CREATE TABLE cadastro (
  id SERIAL PRIMARY KEY,
  username VARCHAR(16) NOT NULL UNIQUE,
  email VARCHAR(24) NOT NULL,
  senha VARCHAR(24) NOT NULL,
  confirma_senha VARCHAR(24) NOT NULL
);
CREATE TABLE agendamento_aula (
  id SERIAL PRIMARY KEY,
  name VARCHAR(24) NOT NULL,
  time INT NOT NULL,
  date DATE NOT NULL,
  fk_id_cadastro SERIAL NOT NULL,
  CONSTRAINT fk_cadastro FOREIGN KEY (fk_id_cadastro) REFERENCES cadastro(id)
);
  
CREATE TABLE compra (
  id SERIAL PRIMARY KEY,
  card_items VARCHAR(100) NOT NULL,
  item_name VARCHAR(100) NOT NULL,
  price INT NOT NULL, -- Changed data type to INT
  addon_name VARCHAR(100) NOT NULL,
  fk_id_cadastro INT NOT NULL,
  CONSTRAINT fk_cadastro_compra FOREIGN KEY (fk_id_cadastro) REFERENCES cadastro(id)
);
CREATE TABLE yoga (
  id SERIAL PRIMARY KEY,
  name VARCHAR(24) NOT NULL,
  time INT(8) NOT NULL,
  date INT(10) NOT NULL,
  fk_id_agendamento_aula INT NULL,
  CONSTRAINT fk_agendamento_aula FOREIGN KEY (fk_id_agendamento_aula) REFERENCES agendamento_aula(id),
  fk_id_cadastro INT NOT NULL,
  CONSTRAINT fk_cadastro FOREIGN KEY (fk_id_cadastro) REFERENCES cadastro(id)
);


CREATE TABLE zumba (
  id SERIAL PRIMARY KEY,
  name VARCHAR(24) NOT NULL,
  time INT(8) NOT NULL,
  date INT(10) NOT NULL,
  fk_id_agendamento_aula INT NULL,
  CONSTRAINT fk_agendamento_aula FOREIGN KEY (fk_id_agendamento_aula) REFERENCES agendamento_aula(id),
  fk_id_cadastro INT NOT NULL,
  CONSTRAINT fk_cadastro FOREIGN KEY (fk_id_cadastro) REFERENCES cadastro(id)
);


CREATE TABLE pilates (
  id SERIAL PRIMARY KEY,
  name VARCHAR(24) NOT NULL,
  time INT(8) NOT NULL,
  date INT(10) NOT NULL,
  fk_id_agendamento_aula INT NULL,
  CONSTRAINT fk_agendamento_aula FOREIGN KEY (fk_id_agendamento_aula) REFERENCES agendamento_aula(id),
  fk_id_cadastro INT NOT NULL,
  CONSTRAINT fk_cadastro FOREIGN KEY (fk_id_cadastro) REFERENCES cadastro(id)
);


CREATE TABLE musculacao (
  id SERIAL PRIMARY KEY,
  name VARCHAR(24) NOT NULL,
  time INT(8) NOT NULL,
  date INT(10) NOT NULL,
  fk_id_agendamento_aula INT NULL,
  CONSTRAINT fk_agendamento_aula FOREIGN KEY (fk_id_agendamento_aula) REFERENCES agendamento_aula(id),
  fk_id_cadastro INT NOT NULL,
  CONSTRAINT fk_cadastro FOREIGN KEY (fk_id_cadastro) REFERENCES cadastro(id)
);
   
INSERT INTO cadastro (username, email, senha, confirma_senha) VALUES
  ('João', 'joao@gmail.com', '123456M', '123456M'), -- Corrected email and password values
  ('Roberto', 'roberto@gmail.com', '123456M', '123456M'),
  ('Dario', 'dario@gmail.com', '123456M', '123456M'),
  ('Julia', 'julia@gmail.com', '123456M', '123456M'),
  ('Rebeca', 'rebeca@gmail.com', '123456M', '123456M');
