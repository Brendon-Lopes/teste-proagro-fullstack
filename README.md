# Teste SoftFocus Full Stack

## Descrição
O Proagro Fácil é um sistema da Softfocus que facilita o gerenciamento de
Proagro (Programa de Garantia da Atividade Agropecuária). O Proagro é um
programa administrado pelo Banco Central do Brasil, que visa exonerar o produtor
rural de obrigações financeiras relativas a operações de crédito, em casos de
ocorrência de perdas nas lavouras. Estas perdas podem ser ocasionadas por
fenômenos naturais, como chuva excessiva, geada, granizo, etc.

No Proagro Fácil, uma das principais etapas para a solicitação de Proagro é
o cadastro da comunicação da perda ocorrida, onde o analista de Proagro irá
informar os dados sobre o produtor rural, sobre a lavoura e sobre o evento que
provocou a perda. É muito importante que essas informações sejam preenchidas
corretamente para que o produtor tenha o benefício aprovado.

Essa é uma aplicação Full Stack criada para esse cadastro de comunicação de perdas ocorridas.

## Tecnologias utilizadas
 - Front-end desenvolvido em ReactJS com TypeScript e TailwindCSS
 - API desenvolvida em Python com Flask e Flask-restx, testada com Pytest e documentada com Swagger
 - Banco de dados MongoDB

## Requisitos
 - Docker
 - Docker Compose

## Utilização

### Clone o repositório
```bash
git@github.com:Brendon-Lopes/teste-proagro-fullstack.git

cd teste-proagro-fullstack
```

### Rodando o projeto
- Instale as dependências do front-end para evitar erros no docker-compose
```bash
cd frontend
```
```bash
npm install
```
```bash
cd ..
```

- Na raíz, rode o projeto com o docker-compose (o docker-compose irá subir o front-end, a API, o banco de dados e os seeders)

```bash
docker-compose up
```
- Acesse http://localhost:3000
  - Pra acessar o front-end já integrado com a API

<br>

- Acesse http://localhost:5000
  - Pra acessar a documentação da API, onde é possível ver todos os endpoints e testá-los

Também é possível utilizar a API separadamento pelos endpoints mostrados na documentação.

