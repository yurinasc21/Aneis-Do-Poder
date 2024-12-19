# Desafio Fullstack: A Forja dos Anéis de Poder

## Contexto do Desafio

A missão foi dada pela Equipe Devvo, criar um CRUD (Create, Read, Update, Delete) para gerenciar os anéis e desenvolver um frontend para visualizar e manipular essas informações.

## Objetivo

1. **Backend** em **.Net Core** para fornecer APIs REST.
2. **Frontend** com **Razor Pages** para a interface do usuário.

## Funcionalidades

### Backend

1. **Criar um Anel**  
   API para registrar um novo anel com as propriedades:

   - `Nome`: Nome do anel.
   - `Poder`: Breve descrição do poder do anel.
   - `Portador`: Nome do portador atual.
   - `ForjadoPor`: Quem forjou o anel.
   - `Imagem`: URL de uma imagem representando o anel.

2. **Validações**

   - Máximo de 3 anéis para Elfos.
   - Máximo de 7 anéis para Anões.
   - Máximo de 9 anéis para Homens.
   - Apenas 1 anel para Sauron.

3. **Listar os Anéis**  
   Retorna uma lista de todos os anéis cadastrados.

4. **Atualizar um Anel**  
   Permite modificar as propriedades de um anel existente.

5. **Deletar um Anel**  
   Remove um anel pelo seu identificador.

### Frontend

1. **Tela de Criação/Atualização de Anel**

   - Um formulário com os seguintes campos:
     - `nome`: Campo de texto para o nome do anel.
     - `poder`: Campo de texto para a descrição do poder do anel.
     - `portador`: Campo de texto para o nome do portador.
     - `forjadoPor`: Campo de texto para indicar quem forjou o anel.
     - `imagem`: Como a imagem vai ser genérica você pode tanto deixar o usuário escolher entre as imagens que o próprio sistema fornece ou remover esse campo e deixar uma imagem default.
   - Botões para:
     - **Criar**: Submeter o formulário para criar um novo anel.
     - **Atualizar**: Alterar as informações de um anel existente.

2. **Tela de Visualização dos Anéis**
   - Exibir todos os anéis em um **carrossel** (ou grid), mostrando:
     - Nome, poder, portador, forjadoPor, e a imagem do anel.
   - O carrossel deve ser responsivo e permitir rolar entre os anéis cadastrados.
   - Adicionar a possibilidade de **excluir** ou **editar** um anel diretamente dessa tela.

## Tecnologias Utilizadas

- **Backend**:

  - **.Net Core 8**
  - **Entity Framework Core**
  - **SQL Server**

- **Frontend**:
  - **Razor Pages**
  - **Bootstrap**

## Instruções para Execução

### Backend

1. Abra o terminal na pasta do backend.
2. Restaure os pacotes NuGet necessários:
   ```bash
   dotnet restore
   ```
3. Configure a string de conexão com sql Server
   ```bash
     "ConnectionStrings": {
     "DefaultConnection": "Server=localhost\\sqlexpress;Initial Catalog=AneisPoderosos; Integrated security=True; Trusted_Connection=True;"
   }
   ```
4. Adicione uma migration para criar o banco:
   ```bash
   dotnet ef migrations add CriacaoTabelaAnel
   ```
5. Executar a API:
   ```bash
   dotnet watch run
   ```

### Frontend

1. Abra o terminal na pasta frontend/Frontend.
2. Executar o frontend:
   ```bash
   dotnet watch run
   ```

## ⚙️ Funcionalidades

**Backend**

- Forjar um Anel: Registra um novo anel com informações como nome, poder, portador, forjador e imagem.

- Exibir Anéis: Retorna uma lista de todos os anéis cadastrados em um carrossel.

- Modificar um Anel: Permite alterar as informações de um anel cadastrado.

- Destruir um Anel: Remove um anel da base de dados.

**Validações:**

- Máximo de 3 anéis para Elfos.

- Máximo de 7 anéis para Anões.

- Máximo de 9 anéis para Homens.

- Apenas 1 anel para Sauron.

**Frontend**

- Home: Mensagem de boas vindas;

- Tela de Forjar um anel: apresnta um formulario para preencher e forjar um novo anel;
- Tela de Exibir Anel: Exibe todos os anéis cadastrados em um carrossel, com funcionalidades para editar ou excluir diretamente da tela.

## 📝 Considerações Finais

Validações de regras de negócio já estão implementadas, garantindo que a quantidade máxima de anéis por tipo de personagem seja respeitada.

Frontend Responsivo: Utiliza Bootstrap para garantir que a interface funcione bem em dispositivos de diferentes tamanhos.

Backend seguro: As operações no backend são protegidas e o sistema valida todas as entradas antes de permitir modificações nos dados.
