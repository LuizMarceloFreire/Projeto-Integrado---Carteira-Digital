const express = require('express');
const muter = require('multer');
const storage = muter.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/');
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const memoruStorage = muter.memoryStorage();

const upload = muter({ memoruStorage });
const routes = express.Router();

const UsuariosController = require('./controllers/UsuariosController');
const DocumentosController = require('./controllers/DecumentosController');

routes.get('/', (request, response) => {
    response.send({
        Resposta: 'deu certo',
    });
});

routes.post('/login', UsuariosController.login);

routes.get('/documentos', DocumentosController.pegarDocumento);
routes.post('/documentos', upload.single('imagem'), DocumentosController.create);

routes.post('/usuarios', UsuariosController.create);

module.exports = routes;