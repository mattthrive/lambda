// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'diversity_development',
      user:     'root',
      password: 'password'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'diversity_development',
      user:     'root',
      password: 'password'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'diversity_development',
      user:     'root',
      password: 'password'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
