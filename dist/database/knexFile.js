"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
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
exports.default = config;
//# sourceMappingURL=knexFile.js.map