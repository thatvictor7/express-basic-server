// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/characters'
  },


    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL + '?ssl=true'
    }
  }
