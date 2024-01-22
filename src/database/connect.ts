import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.DATABASE_NAME as string, process.env.DATABASE_USER as string, process.env.DATABASE_PASSWORD as string, {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
    pool: {
        max: 5, min: 0, idle: 10000
    },
    define: {
        freezeTableName: true, // não espera o nome das tabelas no plural
        charset: 'utf8',
    }
});

sequelize.authenticate().then(() => {
    console.log('Conectdo ao banco de dados');
}).catch(err => {
    console.log('Erro ao conectar ao banco de dados', err);
});
