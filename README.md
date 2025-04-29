# Tela-de-login-back-front
# Back-end
Projeto back-end com criação da API em node e a criação da tela de login em react
Na parte do back-end foi utilizado o node.js como linguagem junto com o express,Prisma, JWT, Bcrypt, MongoDB e middlewares personalizados. Com o Express, construí uma API REST de forma rápida e eficiente, organizando rotas e controladores de maneira clara. A integração com o Prisma, conectando ao banco de dados MongoDB, facilitou a comunicação com os dados, tornando as consultas mais seguras e performáticas, além de simplificar o uso de migrations. Para a autenticação, utilizei JSON Web Token (JWT), permitindo o acesso seguro a rotas protegidas por meio de tokens com verificação e expiração. As senhas dos usuários foram criptografadas com Bcrypt, garantindo a segurança dos dados armazenados, mesmo em caso de vazamento. Implementei middlewares para validar tokens, tratar erros e registrar requisições, promovendo uma estrutura mais limpa, reutilizável e alinhada às boas práticas de desenvolvimento.
# Front-end
No front-end desenvolvi uma tela de login utilizando React, com o objetivo de praticar a integração de algumas bibliotecas muito usadas no mercado. Para a estilização dos componentes, utilizei o styled-components, o que me permitiu criar uma interface moderna e responsiva diretamente no JavaScript.
Também usei o Axios para fazer a comunicação com a API, enviando as informações de login de forma simples e segura. Para a navegação entre as páginas, implementei o React Router DOM, permitindo o redirecionamento automático após o login.
Esse projeto me ajudou a reforçar conceitos importantes de componentização, requisições HTTP e roteamento em aplicações React.

# Como utilizar o projeto
No back-end basta digitar npm install para baixar as dependencias e para rodar o projeto utilize node --watch server.js

No front-end utilizar o npm install e para rodar um npm run dev
