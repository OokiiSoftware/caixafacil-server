import express from 'express';
import bodyParser from 'body-parser';
import {Route} from '../routes/routes';

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(Route);

const port = 8080;

app.get('/', (req, res) => {
    res.status(200).send('Servidor online!');
});

app.listen(port, () => {
    console.log(`Servidor online: http://localhost:${port}`);
});