# Gitfinder
Projeto que consiste em consumir a API do Github e retornar o perfil de um usuário da plataforma.

## Sobre o projeto 
Como dito anteriormente, este projeto consome a API do Github. O usuário digita um @ do github e a aplicação retorna os dados
da pessoa procurada. É retornado dados como: Foto de perfil do usuário, nome, biografia, quantidade de repositórios e seguidores.
Além disso, é gerado o @ do usuário, que ao ser clicado, redireciona o usuário ao perfil do mesmo. 


## Demonstração
Confira abaixo um pouco sobre o projeto:
[![Image from Gyazo](https://i.gyazo.com/b2fcf6ecea7801f0839b32e8b5317cd5.png)](https://gyazo.com/b2fcf6ecea7801f0839b32e8b5317cd5)

Você pode conferir o resultado final aqui: https://gitfinder.caioaugusto.dev/

## Objetivo do projeto
Foi realizado este projeto com o intuito de aplicar os conhecimentos adquiridos sobre requisições HTTPS utilizando API.

## Tecnologias 
Para a realização desse projeto foi utilizado as seguintes tecnologias/linguagens: 
- [ReactJS](https://pt-br.reactjs.org) para a criação da interface
- [styled-components](https://styled-components.com) para a estilização
- [Router](https://reactrouter.com/web/guides/quick-start) para gerenciarmos as rotas da aplicação
- API do Github para obtenção dos dados

## Instalação
Para que este rode em sua máquina, siga os passos abaixo:

```bash
# Clone o repositório em alguma pasta em sua máquina
$ git clone https://github.com/CaioAugustoo/git_finder

# Entre no repositório
$ cd git_finder

Instale as dependências digitando no termimal:
$ yarn install

Rode a aplicação no modo de desenvolvimento.
$ yarn start

Abra http://localhost:3000 no seu navegador para visualizar o projeto
```

#### PS: PROJETO TOTALMENTE INSPIRADO EM: https://octoprofile.now.sh (https://github.com/bchiang7/octoprofile) 
#### FEITO APENAS PARA FINS DIDÁTICOS
