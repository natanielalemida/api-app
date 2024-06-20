import knex from 'knex';
import config from './knexFile';

const environment = 'development';
const connection = knex(config[environment]);

export default connection;
