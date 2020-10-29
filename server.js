const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const db = require('./src/database');

const server = express();
server.set(db);
server.set('view engine', 'html')
server.use(express.json());
server.use(express.static('public')); 
server.use(express.urlencoded({ extended: true }));

nunjucks.configure('./', {
  express: server,
  noCache: true,
})

server.use(routes);

server.listen(3333, () => {
  console.log('servidor rodando');
})