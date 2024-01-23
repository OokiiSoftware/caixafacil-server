import express from 'express';
import bodyParser from 'body-parser';

export const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send('Servidor online!');
});