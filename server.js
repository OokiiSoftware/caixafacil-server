const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// faz o parse do content-type do request - tipo: application/json
app.use(bodyParser.json({limit: '50mb'}));

// faz o parse do content-type do request - tipo: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({limit: '50mb',  extended: true })) //extended: true - pode enviar objetos aninhados

// adicionar uma rota simples padrão
app.get('/', (req, res) => {
    res.json({ mensagem: "Servidor online!" });
});

// rotas
require('./src/rotas/banco_rotas.js')(app);
require('./src/rotas/cliente_rotas.js')(app);
require('./src/rotas/empresa_rotas.js')(app);
require('./src/rotas/pessoa_rotas.js')(app);

// configura a porta e começa a "ouvir" pelas requisições
const PORT = process.env.PORT || 3000; //usa a variável de ambiente PORT ou vai para a porta 3000
app.listen(PORT, () => {
    console.log('Servidor online http://localhost:' + PORT);
});