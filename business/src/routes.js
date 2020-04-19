const express = require('express');

const routes = express.Router();
routes.get('/', (request, response) => {
    response.send({
        Resposta: 'deu certo',
    });
});

module.exports = routes;