import { Sequelize, QueryInterface } from "sequelize";

const env = process.env;

export const sequelize = new Sequelize(env.DB_NAME as string, env.DB_USER as string, env.DB_PASSWORD as string, {
    host: env.SERVER_HOST,
    dialect: 'mysql',
    pool: {
        max: 5, min: 0, idle: 10000
    },
    define: {
        freezeTableName: true, // não espera o nome das tabelas no plural
        charset: 'utf8',
    }
});