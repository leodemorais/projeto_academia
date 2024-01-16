CREATE TABLE cadastro (
  id SERIAL PRIMARY KEY,
  username VARCHAR(16) NOT NULL,
  email VARCHAR(24) NOT NULL,
  senha VARCHAR(24) NOT NULL,
  confirma_senha VARCHAR(24) NOT NULL
);
 
CREATE TABLE agendamento_aula (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(24) NOT NULL,
  time INT NOT NULL,
  date DATE NOT NULL,
  fk_id_cadastro SERIAL NOT NULL,
  CONSTRAINT fk_cadastro FOREIGN KEY (fk_id_cadastro) REFERENCES cadastro(id)
);
  
CREATE TABLE compra (
  ID SERIAL PRIMARY KEY,
  card_items VARCHAR(100) NOT NULL,
  item_name VARCHAR(100) NOT NULL,
  price INT NOT NULL, -- Changed data type to INT
  addon_name VARCHAR(100) NOT NULL,
  fk_id_cadastro INT NOT NULL,
  CONSTRAINT fk_cadastro_compra FOREIGN KEY (fk_id_cadastro) REFERENCES cadastro(id)
);
 
CREATE TABLE pagamento (
  ID SERIAL PRIMARY KEY,
  pix_form VARCHAR(24) NOT NULL, -- Changed data type to VARCHAR
  cartao_form VARCHAR(24) NOT NULL, -- Changed data type to VARCHAR
  boleto_form VARCHAR(24) NOT NULL, -- Changed data type to VARCHAR
  fk_id_compra INT NOT NULL,
  CONSTRAINT fk_compra FOREIGN KEY(fk_id_compra) REFERENCES compra(id),
  fk_id_cadastro INT NOT NULL,
  CONSTRAINT fk_cadastro_pagamento FOREIGN KEY(fk_id_cadastro) REFERENCES cadastro(id)
  );
 
INSERT INTO cadastro (username, email, senha, confirma_senha) VALUES
  ('João', 'joao@gmail.com', '123456M', '123456M'), -- Corrected email and password values
  ('Roberto', 'roberto@gmail.com', '123456M', '123456M'),
  ('Dario', 'dario@gmail.com', '123456M', '123456M'),
  ('Julia', 'julia@gmail.com', '123456M', '123456M'),
  ('Rebeca', 'rebeca@gmail.com', '123456M', '123456M');

  
  
  