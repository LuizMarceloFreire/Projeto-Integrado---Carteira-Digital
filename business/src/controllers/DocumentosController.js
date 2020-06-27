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
        const { tipoDocumentoId, usuarioId, imagem } = req.body;
        const imageBuffer = await Buffer.from(imagem, "base64");

        const jaExiste = await Documentos.findOne({
            where: {
                usuarioId,
                tipoDocumentoId,
            }
        });

        if (jaExiste) {
            await Documentos.update(
                {
                    imagem: imageBuffer,
                },
                {
                    where: {
                        id: jaExiste.id
                    }
                }
            );
        } else {
            console.log('não repetiu!');
            await Documentos.create({
                tipoDocumentoId,
                usuarioId,
                imagem: imageBuffer,
            });
        };

        return res.status(201).end();
    },
}