const express = require('express');

const UsuariosController = require('./controllers/UsuariosController');
const DocumentosController = require('./controllers/DocumentosController');

const multer = require('multer');
const memoryStorage = multer.memoryStorage();
const upload = multer({ memoryStorage });

const routes = express.Router();

/*********************** Rotas ************************/

// rotas de documentos.
routes.get('/documentos/:usuarioId', DocumentosController.pegarTodosDocumentosPorUsuario);
routes.get('/documentos/:usuarioId/:tipoDocumentoId', DocumentosController.pegarDocumentoPorUsuario);
routes.post('/documentos', upload.single('imagem'), DocumentosController.create);

// rotas de usuario.
routes.post('/usuarios', UsuariosController.create);
routes.post('/login', UsuariosController.login);

module.exports = routes;