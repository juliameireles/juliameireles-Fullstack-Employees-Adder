
# 🚀 FullStack Employees Adder

## 📝 Descrição
O **FullStack Employees Adder** é uma aplicação que permite a inserção, visualização e gerenciamento de informações de funcionários. Esta aplicação foi construída utilizando **React** no frontend, **Node.js** no backend e **MySQL** como banco de dados. O sistema permite que os usuários insiram dados como nome, idade, país, posição e salário de funcionários, e exibe todos os funcionários cadastrados em uma lista.

## ⚙️ Funcionalidades
- ➕ Adicionar novos funcionários ao sistema.
- 📋 Visualizar a lista completa de funcionários cadastrados.
- 💾 Armazenamento persistente dos dados em um banco de dados MySQL.

## 🛠️ Tecnologias Utilizadas
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Banco de Dados**: MySQL
- **Bibliotecas**: Axios para requisições HTTP, Cors para controle de acesso entre domínios, MySQL para integração com o banco de dados.

## 🚀 Como Executar o Projeto

### Pré-requisitos
- 🟢 Node.js instalado
- 🟢 MySQL instalado e rodando

### Passo a Passo

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/fullstack-employees-adder.git
   cd fullstack-employees-adder
   ```

2. **Instale as dependências do backend:**

   ```bash
   cd backend
   npm install
   ```

3. **Configuração do Banco de Dados:**
   Crie um banco de dados MySQL com o nome `employeesystem` e adicione as tabelas necessárias:

   ```sql
   CREATE DATABASE employees_db;
   
   CREATE TABLE employees (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(100),
     age INT,
     country VARCHAR(100),
     position VARCHAR(100),
     salary DECIMAL(10, 2)
   );
   ```


4. **Execute o servidor backend:**

   ```bash
   npm start
   ```

6. **Instale as dependências do frontend:**

   ```bash
   cd ../frontend
   npm install
   ```

7. **Execute o frontend:**

   ```bash
   npm start
   ```

8. **Acesse a aplicação:**
   A aplicação estará disponível em `http://localhost:3000`.

## 🗂️ Estrutura do Projeto

- **Frontend (React)**: Interface gráfica que permite ao usuário interagir com o sistema, como adicionar novos funcionários e visualizar a lista.
- **Backend (Node.js, Express.js)**: API que gerencia as requisições, processa dados e interage com o banco de dados.
- **Banco de Dados (MySQL)**: Armazena todas as informações dos funcionários de forma persistente.

## 🤝 Contribuindo

Se você quiser contribuir com este projeto:

1. Faça um fork do repositório.
2. Crie uma branch com sua feature (`git checkout -b minha-feature`).
3. Faça commit das suas alterações (`git commit -m 'Minha nova feature'`).
4. Envie para a branch (`git push origin minha-feature`).
5. Abra um Pull Request.

