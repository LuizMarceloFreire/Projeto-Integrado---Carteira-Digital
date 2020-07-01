const express = require('express');

const UsuariosController = require('./controllers/UsuariosController');
const DocumentosController = require('./controllers/DocumentosController');
const TiposDocumentoController = require('./controllers/TipoDocumentosController');

const routes = express.Router();

/*********************** Rotas ************************/

// Rotas de documentos.
routes.get('/documentos/:usuarioId', DocumentosController.pegarTodosDocumentosPorUsuario);
routes.get('/documentos/:usuarioId/:documentoId', DocumentosController.pegarDocumentoPorId);
routes.post('/documentos', DocumentosController.create);
routes.delete('/documentos/:documentoId', DocumentosController.deletarDocumento);

// Rotas de usuario.
routes.post('/usuarios', UsuariosController.create);
routes.post('/login', UsuariosController.login);

// Rota para pegar os tipos de documentos;
routes.get('/tipos-documento', TiposDocumentoController.getAll);
module.exports = routes;