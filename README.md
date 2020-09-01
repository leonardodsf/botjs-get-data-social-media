### Comando para instalar todas dependências caso não tenha a pasta node_modules no projeto

```npm install```

### Configuração com o banco de dados:

- Pasta src/database/db.js -> é onde se coloca as informações para conexão com o banco.

- Pasta src/database/query.sql -> contêm a estrutura do sql utilizado na api

### Configurando os INSERTS

- Pasta src/controller/getSocialFacebook.js -> Vai ter uma variável que contêm um insert do sql. Apenas altere o nome da tabela que você deseja salvar, ou 
se preferir apenas o retorno do json, comente a linha de código do insert.

### Após instalar todas as dependências e configurar o banco de dados, utilize o comando abaixo para iniciar o servidor e a conexão com o banco de dados

```npm start```

## Link de acesso

 - Por padrão o servidor dará início no link: ``http://localhost:5555``


## Pegando dados via get

 - Para pegar os dados do facebook ou instagram, na rota deve ser passado um único parâmetro. O parâmetro precisa ser 
   o usuário da pessoa no facebook ou instagram. Exemplo abaixo:

 Facebook Metódo GET: ``http://localhost:5555/facebook/user_name``  

 Dados de retorno facebook: 

  ```json

    // 20200901141542
    // http://localhost:5555/facebook/user_name

    {
      "status": 200,
      "facebook": {
        "like": "999",
        "url": "https://www.facebook.com/user_name",
        "reference": [
          {
            "name": "@user_name"
          }
        ]
      }
    }

  ```

  Instagram Metódo GET: ``http://localhost:5555/instagram/user_name``


  Dados de retorno instagram: 

  ``` json

  // 20200901141304
  // http://localhost:5555/instagram/user_name

  {
    "status": 200,
    "instagram": {
      "image": [
        {
          "src": "/instagram/image.png"
        },
      ],
      "followers": "999",
      "name": "user_name",
      "url": "https://www.instagram.com/user_name/"
    }
  } 

  ```
