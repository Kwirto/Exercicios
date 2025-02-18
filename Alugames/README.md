# AluGames

AluGames é um site de aluguel de boardgames. Ele permite que os usuários visualizem os jogos disponíveis e alterem o status de aluguel dos jogos.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:


- **css/**: Contém os arquivos de estilo CSS.
  - `_reset.css`: Define estilos padrão para elementos HTML.
  - `main.css`: Contém os estilos principais do site.

- **img/**: Contém as imagens usadas no site.
  - `fade_bar.svg`, `hachuras.svg`, `logo.svg`: Imagens decorativas.
  - `monopoly.png`, `takenoko.png`, `ticket_to_ride.png`: Capas dos jogos.

- **index.html**: Arquivo HTML principal que estrutura o conteúdo do site.

- **js/**: Contém os arquivos JavaScript.
  - `app.js`: Contém a lógica para alterar o status de aluguel dos jogos.

- **README.md**: Este arquivo, que fornece informações sobre o projeto.

## Funcionalidades

- Visualização de jogos disponíveis para aluguel.
- Alteração do status de aluguel dos jogos (Alugar/Devolver).

## Como Usar

1. Abra o arquivo `index.html` em um navegador web.
2. Clique no botão "Alugar" para alugar um jogo ou "Devolver" para devolver um jogo.

## Estilos

Os estilos principais estão definidos em `css/main.css` e `css/_reset.css`. O layout é responsivo e utiliza flexbox para organizar os elementos.

## JavaScript

A lógica para alterar o status de aluguel dos jogos está no arquivo `js/app.js`. A função `alterarStatus(id)` é chamada quando um botão de aluguel/devolução é clicado.

## Contribuição

Sinta-se à vontade para contribuir com melhorias para este projeto. Faça um fork do repositório, crie uma branch para suas alterações e envie um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
