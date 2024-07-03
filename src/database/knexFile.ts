import { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'appdb.c7ckmgi2afw6.us-east-2.rds.amazonaws.com',
      port: 3306,
      user: 'admin',
      password: 'Password123',
      database: 'app'
    }
  },
  production: {
    client: 'mysql2',
    connection: {
      host: 'appdb.c7ckmgi2afw6.us-east-2.rds.amazonaws.com',
      port: 3306,
      user: 'admin',
      password: 'Password123',
      database: 'app'
    }
  }
};

export default config;
