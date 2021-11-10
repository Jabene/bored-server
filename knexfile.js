// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './api/users.db3'
    },
    migrations: {
      directory: './api/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './api/seeds'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'dc2sr05gc53hrk',
      user:     'brqonsulpcahmw',
      password: '4b1aae0560ae1ddaa2884c26e0394770c31821d6f8ccf166e2ae921da893f985'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './api/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './api/seeds'
    },
    useNullAsDefault: true,
  }

};
