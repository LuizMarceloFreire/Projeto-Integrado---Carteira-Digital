const express = require('express');
const UsuariosController = require('./controllers/UsuariosController');

const routes = express.Router();

routes.get('/', (request, response) => {
    response.send({
        Resposta: 'deu certo',
    });
});

routes.post('/login', UsuariosController.login);

routes.post('/usuarios', UsuariosController.create);

module.exports = routes;