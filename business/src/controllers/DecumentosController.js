const Documentos = require('../models/Documentos');

module.exports = {
    async index(req, res) {
        const documentos = await Documentos.findAll();

        return res.json(documentos);
    },

    async store(req, res) {
        const documentos = await Documentos.create({ imagem, usuarioId, tipoDocumentoId });

        return res.send('Concluido!');
    },
}