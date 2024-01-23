import dotenv from 'dotenv'; dotenv.config();
import { createDatabase } from './src/database/create_database';
import { sequelize } from './src/database/connect';
import { Route } from './src/routes/routes';
import { app } from './src/modules/express';

const env = process.env;
const port = env.SERVER_PORT;
const host = env.SERVER_HOST;

app.use(Route);
app.listen(port, () => {
    console.log(`Servidor online: http://${host}:${port}`);
});

createDatabase.then(() => {
    sequelize.authenticate().then(() => {
        console.log('Conectdo ao banco de dados');
        sequelize.sync();
    }).catch((e) => {
        console.log('Erro ao conectar ao banco de dados', e);
    });
});
