import { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'Nataniel123@',
      database: 'app'
    }
  },
  production: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'Nataniel123@',
      database: 'app'
    }
  }
};

export default config;
