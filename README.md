# Desafio Empresa Cartsys

#### Projeto feito em React + Typescript como requisitado!

#### Acesse o projeto em https://desafiocartsys.vercel.app/

#### OU

### Como ter acesso ao projeto em sua maquina:

##### Clicando em [ <> Code ] tera acesso ao download do arquivo do projeto no formato ZIP
##### Terminando de baixar clique com o botão direito do mouse no arquivo e clique em extrair aqui
##### Abra o arquivo extraido no VS Code
##### Abra o terminal do VS Code usando as teclas Ctrl + '
##### Digite o seguinte comando: `npm install` (considerando que ja tenha o node instalado em sua maquina)

### Como acessar os testes em Cypress

##### Abra o terminal e digite `npm run cypress`
##### Ao abrir o programa do cypress va em E2E Testing
##### Abra com o navegador ou com a versao Desktop
##### Clique em um dos arquivos de teste para ver o teste acontecer em tempo real
 
## Passo a Passo do projeto

##### "Desenvolver um sistema de registro de pedidos utilizando React/Typescript: O usuário será direcionado a uma tela de login (Não é necessário implementar autenticação com tokens ou sistemas de autenticação complexos). " ✔

Ao se deparar com a tela de login digite o seguinte login de usuario para ter acesso:
#### Login: teste@gmail.com
#### Senha: 1234

##### "Ao efetuar o login, o usuário terá acesso à aplicação. Através de um menu, o usuário poderá acessar as seguintes funcionalidades:" ✔

No lado superior direito da tela teram três barras, onde ao clicar abrira um menu com animação, la estará as funcionalidades

##### "Cadastro de Produtos: Este módulo de cadastro de produtos deve conter os seguintes campos mínimos: Código Está Ativo? Descrição, Preço, Quantidade em Estoque" ✔

Ao clicar em "Cadastro de Produtos" poderá ver um formulário com os respectivos campos requisitados, assim como o "Cadastro de Clientes".

##### "O Assistente de Pedido deve ser implementado como um processo passo a passo: Na primeira tela, o usuário poderá escolher um cliente previamente cadastrado e realizar buscas em tempo real por produtos já cadastrados. Cada card de produto deve exibir a imagem (quando disponível), descrição, preço e quantidade em estoque do produto." ✔

No Menu tem a opção de "Assistente de Pedido", que redirecionará para uam tela de escolha de usuario, teram 2 preciamente cadastrados por mim de nome "Mikael" e "Humberto", caso tenha criado um novo cliente aparecerá lá juntamente com os dois nomes! Após escolher um usuario tera alguns itens já previamente cadastrados, claro que caso tenha cadastrado algum na aba "Cadastro de Produtos" também aparecerá lá!

##### "Na segunda tela, o usuário poderá inserir informações de pagamento: Método de Pagamento (Dinheiro / Cartão / Outros) Número de Parcelas: A última tela do assistente solicitará informações de endereço para entrega: (Sinta-se à vontade para criar campos criativos neste formulário.) Ao clicar em "Finalizar", um resumo do pedido deve ser apresentado ao usuário." ✔

Na segunda tela tem as três opções requisitadas, na escolha da opção "cartão" aparecerá uma outra opção com as parcelas, caso queira a vista, podera deixar em apenas 1x, já na opção "outros" abrira um input para que coloque qual seria este outro método de pagamento!

Após a escolha do método de pagamento, terá uam tela para as informações de "endereço de entrega", onde será possivel colocar seu CEP, Bairro, Rua e Numero da casa( visto que o CEP já preenche automaticamente o campo de Estado e Cidade)

#### Ao clicar em finalizar aparecerá assim como requisitado o nome do produto selecionado, o valor e a forma de pagamento, o endereço de entrega, e um botão para retornar ao inicio da aplicação! ✔

### Espero fortemente que esse projeto agrade a todos vocês e aguardo ansiosamente pela resposta! Att. Mikael Augusto
