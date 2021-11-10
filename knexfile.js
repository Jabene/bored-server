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
  
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true&ssl=no-verify',
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './api/migrations',
    },
    seeds: {
      directory: './api/seeds'
    },
    useNullAsDefault: true,
  }

};
