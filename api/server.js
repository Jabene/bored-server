const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const knex = require('knex')
const knexfile = require('../knexfile')
const environment = process.env.NODE_ENV || 'development'
const configuration = knexfile[environment]

const db = knex(configuration)

const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());


server.get('/users', ( req, res ) => {
  db('users').select()
    .then(users => res.json( users ))
})

server.get('/log-in', ( req, res ) => {
  const credentials = req.body
  db('users').select()
    .where('email', credentials.email)
    .where('password', credentials.password)
    .then(user => res.json( user ))
})

server.post('/users', ( req, res ) => {
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
