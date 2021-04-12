const { Pool } = require("pg");
module.exports.postgre_pool =new Pool({
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        host: process.env.POSTGRES_HOST,
        //port: process.env.POSTGRES_PORT,
        max: 1000

        //user: 'postgres',
        //password: 'park0070!',
        //database: 'monolithic',
        //host: 'localhost',

    });
