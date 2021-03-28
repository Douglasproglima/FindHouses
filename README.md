<p align="center">
  <img alt="Logo DevRise Week" title="#douglasproglima-apps" src=".github/../src/assets/img/Logo.png" width="250px" />
</p>

<h1 align="center">
🚧 Find Houses | Em Construção 🚧
</h1>

<!-- <h4 align="center">
  🚀 Find Houses
</h4> -->

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Douglasproglima/FindHouses">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Douglasproglima/FindHouses">

  <a href="https://github.com/Douglasproglima/FindHouses/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Douglasproglima/FindHouses">
  </a>

  <a href="https://github.com/Douglasproglima/FindHouses/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/Douglasproglima/FindHouses">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

<p align="center">
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-executando">Executando</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>
<br>

## 💻 Projeto

Esse projeto foi desenvolvido para aprendizagem da arquitetura de Atomic Design(átomos, moléculas e partículas) em React Native. Um app simples para aluguel de imóveis.

## :school_satchel: Aprendizados

- Arquitetura Atomic Design
- Criando componentes com o Storybook
- Estilizando components com o Styled Components
- Instalando dependências com o Yarn
- Consumindo API's com o Axios
- Navegação com o React Navigation
- Gerenciando estado global com o Zustand
- Salvando dados localmente com o Async Storage
- Personalização de Ícones e Splash Screen na camada Nativa
- Gerando versão Release do App

## 🎨 Layout

Você pode encontrar o layout nesse link do [Figma](https://www.figma.com/file/ixKXvWvJzSr8E8nBNwJ0Ow/DevRiseWeek---FindHouses?node-id=20%3A29)

## :rocket: Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Typescript](https://www.typescriptlang.org/) - Em Conversão
- [styled-components](https://styled-components.com/)

\* Para mais detalhes, veja o **[package.json](./package.json)**

## :notebook: Executando

```bash
# Clone este repositório
$ git clone https://github.com/Douglasproglima/FindHouses.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd FindHouses

# Instale as dependências
$ yarn install

# Execute a aplicação
$ yarn android ou yarn ios
```

---

## :notebook: Alguns comando executados durantes desenvolvimento do APP

---

```bash
# Relacionar as fontes ao react-native
$ npx react-native link

# Em novos projetos, nasta add dentro da pasta src/assets/fonts as fontes de sua escolha. Após esse procedimento, na raiz do projeto, deve se criar um arquivo react-native.config.js e conteúdo algo similar:
module.exports = {
  assets: ['./src/assets/fonts/'],
};

# repetir o  comando link para relacionar as fonts ao react-native.

# Para usar api externa, é necessário add dois pacotes, axios e react-native-dotenv
$ yarn add axios react-native-dotenv

# Configurar plugin do react-native dotenv no arquivo babel
$

# Limpar cache do Metro bundle (Pausar o nodeserver)
$ yarn start --reset-cache
```

---

Feito com ❤️ por Douglas Lima <img src="https://raw.githubusercontent.com/Douglasproglima/douglasproglima/master/gifs/Hi.gif" width="30px"></h2> [Entre em contato!](https://www.linkedin.com/in/douglasproglima)
