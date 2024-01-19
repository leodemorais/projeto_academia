-- Tabela de cadastro (Registro de Usuário)
CREATE TABLE cadastro (
  id SERIAL PRIMARY KEY,
  username VARCHAR(16) NOT NULL UNIQUE,
  email VARCHAR(50) NOT NULL,
  senha VARCHAR(24) NOT NULL,
  confirma_senha VARCHAR(24) NOT NULL
);

-- Tabela de compra (Compra)
CREATE TABLE compra (
  id SERIAL PRIMARY KEY,
  card_items VARCHAR(100) NOT NULL, 
  addons_items VARCHAR(100) NOT NULL, 
  fk_id_cadastro INT NOT NULL, 
  CONSTRAINT fk_cadastro_compra FOREIGN KEY (fk_id_cadastro) REFERENCES cadastro(id) 
);


CREATE TABLE itens_compra (
  id SERIAL PRIMARY KEY,
  card_items VARCHAR(100) NOT NULL,
  fk_id_compra INT NOT NULL,
  CONSTRAINT fk_compra_itens FOREIGN KEY (fk_id_compra) REFERENCES compra(id)
);

CREATE TABLE adicionais_compra (
  id SERIAL PRIMARY KEY,
  addons_items VARCHAR(100) NOT NULL,
  fk_id_compra INT NOT NULL,
  CONSTRAINT fk_compra_adicionais FOREIGN KEY (fk_id_compra) REFERENCES compra(id)
);

-- Tabela de agendamento_aula (Agendamento de Aula)
CREATE TABLE agendamento_aula (
  id SERIAL PRIMARY KEY,
  name VARCHAR(24) NOT NULL,
  time INT NOT NULL,
  date DATE NOT NULL,
  fk_id_cadastro INT NOT NULL,
  fk_id_compra INT NOT NULL,
  CONSTRAINT fk_cadastro_agendamento FOREIGN KEY (fk_id_cadastro) REFERENCES cadastro(id),
  CONSTRAINT fk_compra_agendamento FOREIGN KEY (fk_id_compra) REFERENCES compra(id)
);

-- Tabela de planos (Planos)
CREATE TABLE planos (
  id SERIAL PRIMARY KEY,
  card_items VARCHAR(100) NOT NULL, 
  price INT NOT NULL,
  fk_id_compra INT NOT NULL,
  CONSTRAINT fk_compra_plano FOREIGN KEY (fk_id_compra) REFERENCES compra(id)
);

-- Tabela de adicionais (Itens Adicionais)
CREATE TABLE adicionais (
  id SERIAL PRIMARY KEY,
  addons_items VARCHAR(100) NOT NULL, 
  price INT NOT NULL,
  fk_id_compra INT NOT NULL,
  fk_id_planos INT NOT NULL,
  CONSTRAINT fk_compra_adicional FOREIGN KEY (fk_id_compra) REFERENCES compra(id),
  CONSTRAINT fk_planos_adicional FOREIGN KEY (fk_id_planos) REFERENCES planos(id)
);

-- Tabela de modalidade (Tipos de Aula)
CREATE TABLE modalidade (
  id SERIAL PRIMARY KEY,
  name VARCHAR(24) NOT NULL,
  time INT NOT NULL,
  date DATE NOT NULL,
  fk_id_cadastro INT NOT NULL,
  CONSTRAINT fk_cadastro_modalidade FOREIGN KEY (fk_id_cadastro) REFERENCES cadastro(id)
);
