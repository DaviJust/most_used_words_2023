# Contador de Palavras Vue + Electron
Este é um aplicativo desktop construído com [Vue](https://vuejs.org/) e [Electron](https://www.electronjs.org/) para contar o número de ocorrências de palavras em um texto.
## Iniciando
1. Clone o repositório
bash
git clone https://github.com/DaviJust/most_used_words_2023.git
2. Instale as dependências
bash
npm install
3. Execute a aplicação no modo de desenvolvimento
bash
npm run electron:serve
Isso iniciará a aplicação Electron em uma janela separada.
4. Construa a aplicação de produção
bash 
npm run electron:build
Isso compilará a aplicação Vue e criará a pasta dist_electron pronta para distribuição.
## Funcionalidades
Esta aplicação permite:
- Clicar em "Contar Palavras" para exibir o número de ocorrências de cada palavra no texto
- As palavras são exibidas em ordem decrescente de contagem

## Tecnologias
Esta aplicação usa:
- [Vue](https://vuejs.org/) - Framework JavaScript para UI
- [Vuetify](https://vuetifyjs.com/en/) - Componentes Vue Material Design
- [Electron](https://www.electronjs.org/) - Framework para criar aplicativos desktop com JavaScript
- [webpack](https://webpack.js.org/) - Empacotador de módulos 
- [Babel](https://babeljs.io/) - Compilador JavaScript
