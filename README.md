README.md

Aula de recuperação dia 09/08/2024
SP1 Implementação com Angular: ATIVIDADE 1
SP2 Implentação da Criação e Consumo de API: ATIVIDADE 3


Toda aplicação web temos essas três aplicações:
1. front end (Angular);
Requisição;
2.API - 3. Banco de Dados = devemos simular com json-server atua tanto com API como Banco de dados.

Framework front-end são conjuntos de códigos criados para facilitar e tornar mais rápido o desenvolvimento.

Angular é 2016

O Angular funciona com base em COMPONENTES, pensamos o site como pedaços;

Estrutura de um Componente:
- HTML;
- CSS;
- Testes;
- Typescript;

dentro do typescript!
- Selector -> nome componente
- templeta -> HTML
- StylerUrls -> CSS

Ferramentas:

- Node.js
- Visual Studio Code 

Obs: terminando de instalar.

Acessar o terminal do linux ou powershell do windows.

- node
- npm install @angular/cli@15.0.4 -g

Verificar a versão certa que instalei

- ng version

2º instalação json-server
- npm install json-server@0.17.1 -g

Criar nosso programar
- ng new
- nome do projeto "projeto_angular_1.0"
- você que adicionar rotas no angular "Sim"
- stylesheet CSS "YES"

Dentro do projeto temos o 'src/app' vamos utilizar bastante

Devemos fazer:
1º criar os componetes.
- ng generate component header
- ng g c login 
- ng g c lista

Rodar esse projeto.

- ng serve
- http://localhost:4200

- Dentro da pasta src/app acessa app.component.html, limpa o código.
- src/app/header no arquivo header.component.html, aqui vamos colocar nosso HTML.
- src/app/header no arquivo header.component.css, aqui vamos colocar nosso style css.
- src/app/login no arquivo login.component.html, aqui vamos colocar a logica.
- src/app/login no arquivo login.component.css, aqui vamos colocar nosso style css.

VAMOS BRINCAR COM ANGULAR!!!

- src/app/ arquivo app-routing.modules.ts
- src/app arquivo app.component.html
- src/app/header arquivo header.compoment.html


VAMOS PARA API!!!

- Criar na raiz do projeto 'dbgames.json' está no exercícios. ATIVIDADE 1 & 2.
- Usar o terminal digital o código 'json-server dbgames.json' e 'ng serve' rodando
- Prompt comando, gerar um serviço para angular 'ng g s produto'
- src/app/ no arquivo 'produto.services.ts'
- src/app no arquivo 'app.modules.ts'
- src/app/lista no arquivo 'lista.compoment.ts'
- src/app/lista no arquivo lista.compoment.html

Entrega na ATIVIDADE '1º se for postar no github? retirar node_modules. 2º Obs feito em aula de recuperação.'