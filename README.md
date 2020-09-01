### Comando para instalar todas dependências caso não tenha a pasta node_modules no projeto

```npm install``

### Configuração com o banco de dados:

- Pasta src/database/db.js -> é onde se coloca as informações para conexão com o banco.

- Pasta src/database/query.sql -> contêm a estrutura do sql utilizado na api

### Configurando os INSERTS

- Pasta src/controller/getSocialFacebook.js -> Vai ter uma variável que contêm um insert do sql. Apenas altere o nome da tabela que você deseja salvar, ou 
se preferir apenas o retorno do json, comente a linha de código do insert.

### Após instalar todas as dependências e configurar o banco de dados, utilize o comando abaixo para iniciar o servidor e a conexão com o banco de dados

``npm start``
