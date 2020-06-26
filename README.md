# api-authentication

Microsserviço de Autenticação utilizando JWT e hospedagem no [Heroku](https://www.heroku.com/).

## Tecnologias:

- NodeJS v12.16.1, Typescript v3.8.3

## Como buildar:

- Execute o comando ```npm install```. Execute também ```npm install typescript -g``` caso não tenha o typescript no PATH do computador. Após, execute ```tsc```.

## Obtendo um token válido:

Faça uma requisição ```POST``` para a url ```https://node-ts-api-authentication.herokuapp.com/auth``` utilizando o usuario ```admin``` e senha ```admin```.

