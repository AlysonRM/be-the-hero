const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json()); //Ler informações da pagina em json(POST.BODY)
app.use(routes); //Carrega as rotas "routes"


app.listen(3333);