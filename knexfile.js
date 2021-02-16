require("dotenv").config();

localPg = {
  host: process.env.DEV_DATABASE_HOST,
  database: process.env.DEV_DATABASE_USER,
  user: "postgres",
  password: process.env.DEV_DATABASE_PASSWORD,
  database_url: process.env.DEV_DATABASE_URL
}

testPg = {
  host: process.env.TEST_DATABASE_HOST,
  database: process.env.TEST_DATABASE_USER,
  user: "postgres",
  password: process.env.TEST_DATABASE_PASSWORD,
  database_url: process.env.TEST_DATABASE_URL
}

productionPg = {
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database_url: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },
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
    },
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

  // test: {
  //   client: "sqlite3",
  //   connection: ":memory:",
  //   useNullAsDefault: true,
  //   migrations: {
  //     directory: './database/migrations'
  //   },
  //   seeds: {
  //     directory: "./database/test_seeds"
  //   }
  // },
  test: {
    client: 'sqlite3',
    connection: { 
      // filename: './database/instaham_test.sqlite3' 
      filename: ':memory:',
    },
    useNullAsDefault: true, 
    migrations: {
      directory: './testdata/migrations'
    },
    seeds: {
      directory: "./testdata/test_seeds"
    },
  },

  production: {
    client: 'pg',
    connection: productionPg,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    },
  }

};
