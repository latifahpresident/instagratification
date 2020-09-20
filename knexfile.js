require("dotenv").config();

localPg = {
  host: process.env.DEV_DATABASE_HOST,
  database: process.env.DEV_DATABASE_USER,
  user: process.env.DEV_DATABASE_USER,
  password: process.env.DEV_DATABASE_PASSWORD,
  database_url: process.env.DEV_DATABASE_URL
}
module.exports = {

  development: {
    client: 'pg',
    connection: localPg,
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
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
  }

};
