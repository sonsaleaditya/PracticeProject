let pg = require('pg');
const dotenv = require("dotenv");
dotenv.config();

    const db = new pg.Client({
        host: process.env.POSTGRES_HOST,
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DATABASE,
        port: process.env.PORT,
        ssl:{
            rejectUnauthorized:false,
        }
    });

    module.exports=db;