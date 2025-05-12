# Breaking Bad Quotes

(Exemplo de aplicação feito na aula)

(passo a passo em https://yopad.eu/p/aula12Maio)

## Instruções

1. Clonar este repositório
2. Fazer cd para a pasta bbq: `cd bbq`
4. Fazer `npm install` para instalar as dependências da app
5. lançar a app com `nodemon` ou `npm start`

## Instruções passo a passo


1. Criar uma pasta para o trabalho, "cd pasta"
2. instalar express - "npm install express-generator -g" ou "npm install express"
3. criar app com "npx express-generator --hbs nomedaApp" ou com "express --hbs nomedaApp"
   1. Seguir 3 passos apresentados na consola 
      1. cd nomedaApp
      2. npm install
      3. ... DEBUG .... npm start (ver detalhes no output do terminal)
4. Abrir o browser em http://localhost:3000 ou http://127.0.0.1:3000
5. Visual Studio Code (abrir a pasta do projeto)
6. Editar o ficheiro ./routes/index.js para alterar o title
7. Adicionar HTMX ao nosso template layout.hbs 

```
<script src="https://unpkg.com/htmx.org@2.0.4" integrity="sha384-HGfztofotfshcF7+8n44JQL2oJmowVChPTg48S+jvZoztPfvwD79OC/LTtG6dMp+" crossorigin="anonymous"></script>
```

8. Edit inclamos o template index.hbs parauir pedidos hx-get a "/quote" nos eventos "load" do blockquote e "click" do botão
9. Alteramos o ficheiro app.js para incluir o roteador quote.js
10. criamos um template quote.hbs para renderizar as quote
11. no roteador quote.js alteramos para a resposta renderizar o nosso tempalte  
```res.render('quote', ....```
12. no objecto a renderizar temos que adicionar `layout:false` para o roteador /quote enviar apenas o html parcial que desejamos
13. Instalar o nodemon para não ter que fazer restart com servidor. ```npm install -g nodemon```
14. Utilizar o url https://api.breakingbadquotes.xyz/v1/quotes 
15. Importa a biblioteca axios com `var axios = require('axios');
16 Aceder ao nosso API com axios.get('URL da API');
17 Utilizar a funcão async e o axios com await
18 utilizar o operador ... para expandir os resultados com {...resultados.data[0], layout:false}
19 o código está todo disponível em https://github.com/sixhat/25LabApps 

