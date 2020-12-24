//criando o servidor:

//importar dependências
const express = require('express');
const path = require('path');
const pages = require('./pages');

//iniciando a lib(biblioteca) express
const server = express()
server
//body do req
.use(express.urlencoded({ extended: true }))
//utilizando os arquivos estáticos criados em nossa pasta public
.use(express.static('public'))

//confirgurando template engine handlebars
//todos os arquivos terminando em html, tem que ser modificados para hbs
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

//criando rota do servidor
// o / é a mesma coisa de dizemos index
//para acessar cada página desenvolvida, sempre tenho que criar sua rota no servidor
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

// ativando/ ligando o servidor
//NECESSÁRIO DESINSTALAR O PLUGIN DO VS CODE LIVE SERVER
server.listen(process.env.PORT || 5500)

//abrir o servidor via terminal: 
//node src/server.js
//para sair ou desligar o servidor, no terminal digitar ctrl + C
//abrir o terminal no VS code, ctrl + J
//pós instalação no package.json em scripts, substituir a palavra text por start e excluir tudo que estivar dentro do aspas e escrever "nodemon src/server.js"
//depois disso vamos abrir o servidor via nmp start, com isso o servidor está aberto


