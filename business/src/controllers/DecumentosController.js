const Documentos = require('../models/Documentos');

module.exports = {
    async pegarDocumento(req, res) {
        const documentos = await Documentos.findAll();

        return res.json(documentos);
    },

    async create(req, res) {

        const { tipoDocumentoId, usuarioId } = req.body;
        const imagem = req.file.buffer;

        const jaExiste = await Documentos.findOne({
            where: {
                usuarioId,
                tipoDocumentoId,
            }
        });

        if (jaExiste) {
            await Documentos.update(
                {
                    imagem,
                },
                {
                    where: {
                        id: jaExiste.id
                    }
                }
            );
        } else {
            await Documentos.create({
                tipoDocumentoId,
                usuarioId,
                imagem,
            });
        };


        return res.send('Concluido!');
    },
}