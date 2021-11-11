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


server.get('/log-in/:email/:password', ( req, res ) => {
  const email = req.params.email
  const password = req.params.password
  db('users')
    .where({
      email: email,
      password: password
    })
    .select()
    .then(user => res.json( user ))
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

server.post( '/activity/:userId', ( req, res ) => {
  const activity = req.body
  return db( 'activities' )
    .returning( 'id' )
    .insert({
      activity: activity.activity,
      participants: activity.participants,
      link: activity.link,
      type: activity.type,
      user_id: req.params.userId
    })
    .then( id => res.json( id ))
})

// server.post( '/join', ( req, res ) => {
//   const ids = req.body
//   db('join')
//     .insert({
//       activity: ids.activity,
//       user: ids.user
//     })
//     .then( res.json("Join Created"))
// })

server.get( '/activities/:userId', ( req, res ) => {
  const userId = req.params.userId
  db('activities')
    .select()
    .where({ user_id: userId })
    .then(activities => res.json( activities )
})

module.exports = server;
