const Documentos = require('../models/Documentos');
const TiposDocumento = require('../models/TiposDocumento');

module.exports = {
    async pegarTodosDocumentosPorUsuario(req, res) {
        const { usuarioId } = req.params;
        let documentos = await Documentos.findAll({
            where: {
                usuarioId,
            },
            include: [
                {
                    model: TiposDocumento,
                    as: 'tipoDocumento',
                }
            ]
        });
        documentos = await documentos.map(documento => {
            const { id } = documento;
            const { tipo } = documento.tipoDocumento;
            return ({
                id,
                tipo,
            });
        });

        console.log(documentos);

        return res.status(200).json(documentos);
    },

    async pegarDocumentoPorUsuario(req, res) {
        const { usuarioId, tipoDocumentoId } = req.params;
        const documentos = await Documentos.findOne({
            where: {
                usuarioId,
                tipoDocumentoId,
            }
        });

        return res.status(200).json(documentos);
    },

    async create(req, res) {
        const { tipoDocumentoId, usuarioId, imagemDocumentoFrente, imagemDocumentoVerso } = req.body;
        const imagemDocumentoFrenteBuffer = await Buffer.from(imagemDocumentoFrente, "base64");
        const imagemDocumentoVersoBuffer = imagemDocumentoVerso ?
            await Buffer.from(imagemDocumentoVerso, "base64") : null;

        const jaExiste = await Documentos.findOne({
            where: {
                usuarioId,
                tipoDocumentoId,
            }
        });

        if (jaExiste) {
            await Documentos.update(
                {
                    imagemDocumentoFrente: imagemDocumentoFrenteBuffer,
                    imagemDocumentoVerso: imagemDocumentoVersoBuffer,
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
                imagemDocumentoFrente: imagemDocumentoFrenteBuffer,
                imagemDocumentoVerso: imagemDocumentoVersoBuffer,
            });
        };

        return res.status(201).end();
    },
}