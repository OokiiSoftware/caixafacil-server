import mysql from 'mysql2/promise';
    
const env = process.env;

export const createDatabase = mysql.createConnection({
    user: env.DB_USER,
    password: env.DB_PASSWORD
}).then((connection) => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${env.DB_NAME};`).then(() => {
        // Safe to use sequelize now
    });
});