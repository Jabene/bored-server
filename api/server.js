const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const db = require('./dbConfig')

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.send('Welcom to the Todo app server')
})

server.get('/todos', (req, res) => {
  //GET all todos
})

server.post('/todos', (req, res) => {
  //POST a todo
})

module.exports = server;
