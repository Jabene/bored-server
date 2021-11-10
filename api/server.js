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

server.get('/log-in/:email/:password', ( req, res ) => {
  const email = req.params.email
  const password = req.params.password
  db('users')
    .where({
      email: email,
      password: password
    })
    .select()
    .then(user => res.json( `user: ${user} email: ${email} password: ${password}` ))
})

server.post('/users', ( req, res ) => {
  const user = req.body
  db('users')
    .insert({
      first_name: user.firstName,
      last_name: user.lastName,
      email: user.email,
      password: user.password
    })
    .then(() => res.json('Account Created!'))
})

module.exports = server;
