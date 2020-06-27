const express = require('express');

const UsuariosController = require('./controllers/UsuariosController');
const DocumentosController = require('./controllers/DocumentosController');

const routes = express.Router();

/*********************** Rotas ************************/

// rotas de documentos.
routes.get('/documentos/:usuarioId', DocumentosController.pegarTodosDocumentosPorUsuario);
routes.get('/documentos/:usuarioId/:tipoDocumentoId', DocumentosController.pegarDocumentoPorUsuario);
routes.post('/documentos', DocumentosController.create);

// rotas de usuario.
routes.post('/usuarios', UsuariosController.create);
routes.post('/login', UsuariosController.login);

module.exports = routes;