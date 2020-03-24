const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();




/**
 * Rotoas / Recurso
 */

 /**
  * Métodos HTTP
  * 
  * GET: Buscar/listar uma informação do back-end
  * POST: Criar uma informação do back-end
  * PUT: Alterar uma informação do back-end
  * DELETE: Deletar uma informação no back-end
  */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos (usando um valor )
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLLite
 * noSQL: MongoDB, CouchDB etc...
 * Esta sendo usado no sistema o SQLLite3
 */


routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/users', (request, response) => {
    //return response.send('Olá Mundo!!!');
    //Usado para pegar os parametros (request.query)
    //Usando para pegar o identificador (request.params)
    //Usando "request.body" é possível pegar informações dentro do body js
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana OmmiStack 11.0',
        aluno: 'Alyson R. Martins',
        professor: 'Diego Fernandes'
    });
});

module.exports = routes;
