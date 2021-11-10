const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// const db = require('./dbConfig')
const knex = require('knex')
const knexfile = require('../knexfile')
const environment = process.env.NODE_ENV || 'development'
const configuration = knexfile[environment]

const db = knex(configuration)

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.send('Welcom to the Todo app server')
})

server.get('/users', (req, res) => {
  db('users').select()
    .then(users => res.json(users))
})

server.post('/users', (req, res) => {
  const user = request.body
  db('users')
    .insert({
      first_name: user.firstName,
      last_name: user.lastName,
      email: user.email,
      password: user.password
    })
    .then(() => {
      response.json('Account Created!')
    })
})

module.exports = server;
